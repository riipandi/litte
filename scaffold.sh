#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(dirname "$0")

# Check for --skip-install and --force flags
SKIP_INSTALL=0
FORCE_OVERWRITE=0
for arg in "$@"; do
    if [[ "$arg" == "--skip-install" ]]; then
        SKIP_INSTALL=1
    elif [[ "$arg" == "--force" ]]; then
        FORCE_OVERWRITE=1
    fi
done

# Function to validate input
validate_input() {
    local value="$1"
    local regex="$2"
    local message="$3"
    if [[ -z "$value" || ! "$value" =~ $regex ]]; then
        echo "Error: $message"
        exit 1
    fi
}

# Function to convert kebab-case to camelCase and add 'Styles' suffix
to_camel_case_styles() {
    local input="$1"
    local output
    output=$(echo "$input" | awk -F- '{for(i=1;i<=NF;i++){if(i==1){printf $i}else{printf toupper(substr($i,1,1)) substr($i,2)}}}')
    echo "${output}Styles"
}

# Get args or prompt
if [[ $# -ge 3 ]]; then
    CHANGEME_COMPONENT_ID="$1"
    CHANGEME_COMPONENT_NAME="$2"
    CHANGEME_COMPONENT_TITLE="$3"
    validate_input "$CHANGEME_COMPONENT_ID" '^[a-z0-9-]+$' "Component ID must be lowercase letters, numbers, and hyphens (e.g. example-component)"
    validate_input "$CHANGEME_COMPONENT_NAME" '^[A-Z][A-Za-z0-9]+$' "Component Name must be PascalCase (e.g. ExampleComponent)"
    validate_input "$CHANGEME_COMPONENT_TITLE" '^[A-Za-z0-9 ]+$' "Component Title can only contain letters, numbers, and spaces (e.g. Litte Component)"
else
    printf "%-46s: " "Enter Component ID (e.g. example-component)"
    read CHANGEME_COMPONENT_ID
    validate_input "$CHANGEME_COMPONENT_ID" '^[a-z0-9-]+$' "Component ID must be lowercase letters, numbers, and hyphens (e.g. example-component)"

    printf "%-46s: " "Enter Component Name (e.g. ExampleComponent)"
    read CHANGEME_COMPONENT_NAME
    validate_input "$CHANGEME_COMPONENT_NAME" '^[A-Z][A-Za-z0-9]+$' "Component Name must be PascalCase (e.g. ExampleComponent)"

    printf "%-46s: " "Enter Component Title (e.g. Litte Component)"
    read CHANGEME_COMPONENT_TITLE
    validate_input "$CHANGEME_COMPONENT_TITLE" '^[A-Za-z0-9 ]+$' "Component Title can only contain letters, numbers, and spaces (e.g. Litte Component)"
fi

# Auto-generate Component Styles from Component ID
CHANGEME_COMPONENT_STYLES=$(to_camel_case_styles "$CHANGEME_COMPONENT_ID")

# Function to replace string using sd or sed
replace_string() {
    local file="$1"
    local search="$2"
    local replace="$3"
    if command -v sd >/dev/null 2>&1; then
        sd "$search" "$replace" "$file"
    else
        # macOS uses 'sed -i ''', Linux uses 'sed -i'
        if [[ "$OSTYPE" == "darwin"* ]]; then
            sed -i '' "s/$search/$replace/g" "$file"
        else
            sed -i "s/$search/$replace/g" "$file"
        fi
    fi
}

STUB_DIR="$ROOT_DIR/stub"
TARGET_DIR="$ROOT_DIR/packages/litte-components/$CHANGEME_COMPONENT_ID"

# Check if target directory exists
if [[ -d "$TARGET_DIR" ]]; then
    if [[ $FORCE_OVERWRITE -eq 1 ]]; then
        rm -rf "$TARGET_DIR"
    else
        read -rp "Target directory for $CHANGEME_COMPONENT_ID already exists. Overwrite? (y/N): " confirm
        if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
            echo "Aborted."
            exit 1
        fi
        rm -rf "$TARGET_DIR"
    fi
fi

# Copy stub to target
cp -r "$STUB_DIR" "$TARGET_DIR"

# Replace strings in all files in target directory
find "$TARGET_DIR" -type f | while read -r file; do
    replace_string "$file" "CHANGEME_COMPONENT_ID" "$CHANGEME_COMPONENT_ID"
    replace_string "$file" "CHANGEME_COMPONENT_NAME" "$CHANGEME_COMPONENT_NAME"
    replace_string "$file" "CHANGEME_COMPONENT_TITLE" "$CHANGEME_COMPONENT_TITLE"
    replace_string "$file" "CHANGEME_COMPONENT_STYLES" "$CHANGEME_COMPONENT_STYLES"
done

# Rename component files
mv "$TARGET_DIR/src/component.css.ts" "$TARGET_DIR/src/${CHANGEME_COMPONENT_ID}.css.ts"
mv "$TARGET_DIR/src/component.types.ts" "$TARGET_DIR/src/${CHANGEME_COMPONENT_ID}.types.ts"
mv "$TARGET_DIR/src/component.ts" "$TARGET_DIR/src/${CHANGEME_COMPONENT_ID}.ts"

# Scaffold the storybook test file
STORYBOOK_SRC="$STUB_DIR/component.stories.ts"
STORYBOOK_DEST="$ROOT_DIR/packages/litte-storybook/stories/$CHANGEME_COMPONENT_ID/${CHANGEME_COMPONENT_ID}.stories.ts"

mkdir -p "$(dirname "$STORYBOOK_DEST")"
rm -f "$TARGET_DIR/component.stories.ts"

if [[ -f "$STORYBOOK_DEST" ]]; then
    if [[ $FORCE_OVERWRITE -eq 1 ]]; then
        cp "$STORYBOOK_SRC" "$STORYBOOK_DEST"
    else
        read -rp "Storybook file for $CHANGEME_COMPONENT_ID already exists. Overwrite? (y/N): " story_confirm
        if [[ ! "$story_confirm" =~ ^[Yy]$ ]]; then
            echo "Skipped storybook file creation."
        else
            cp "$STORYBOOK_SRC" "$STORYBOOK_DEST"
        fi
    fi
else
    cp "$STORYBOOK_SRC" "$STORYBOOK_DEST"
fi

# Replace strings in the new storybook file if it was created/overwritten
if [[ -f "$STORYBOOK_DEST" ]]; then
    replace_string "$STORYBOOK_DEST" "CHANGEME_COMPONENT_ID" "$CHANGEME_COMPONENT_ID"
    replace_string "$STORYBOOK_DEST" "CHANGEME_COMPONENT_NAME" "$CHANGEME_COMPONENT_NAME"
    replace_string "$STORYBOOK_DEST" "CHANGEME_COMPONENT_TITLE" "$CHANGEME_COMPONENT_TITLE"
    replace_string "$STORYBOOK_DEST" "CHANGEME_COMPONENT_STYLES" "$CHANGEME_COMPONENT_STYLES"
fi

# Update packages/litte-storybook/package.json to include the new story path and dependency
STORYBOOK_PKG="$ROOT_DIR/packages/litte-storybook/package.json"
STORY_PATH="stories/$CHANGEME_COMPONENT_ID/${CHANGEME_COMPONENT_ID}.stories.ts"
COMPONENT_DEP="@litte/$CHANGEME_COMPONENT_ID"

if [[ -f "$STORYBOOK_PKG" ]]; then
    # Add dependency to 'dependencies' if not present
    if ! jq -e ".dependencies[\"$COMPONENT_DEP\"]" "$STORYBOOK_PKG" >/dev/null; then
        tmp=$(mktemp)
        jq ".dependencies[\"$COMPONENT_DEP\"] = \"workspace:*\"" "$STORYBOOK_PKG" > "$tmp" && mv "$tmp" "$STORYBOOK_PKG"
        echo "Added dependency: $COMPONENT_DEP"
    fi
else
    echo "Warning: $STORYBOOK_PKG not found, skipping storybook package.json update."
fi

# Run code formatter (Biome) on the new files
if command -v pnpm >/dev/null 2>&1; then
    pnpm --silent format
else
    echo "Warning: pnpm not found, skipping code formatting."
fi

echo
echo "Scaffold new component completed at $TARGET_DIR"
echo "Remember to update the example usage in packages/litte-components/$CHANGEME_COMPONENT_ID/README.md"
echo

# Ask if user wants to run pnpm install (unless --skip-install is set)
if [[ $SKIP_INSTALL -eq 0 ]]; then
    printf "%-30s: " "Do you want to rebuild and run 'pnpm install' now? (y/N)"
    read run_pnpm
    if [[ "$run_pnpm" =~ ^[Yy]$ ]]; then
        echo "Running pnpm install..."
        pnpm --silent install
        pnpm --silent build:ui
    fi
else
    echo "Skipping pnpm install due to --skip-install flag."
fi
echo "Done, exiting."
