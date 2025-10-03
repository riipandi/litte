#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(dirname "$0")

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

# Prompt for variables with aligned colons
printf "%-46s: " "Enter Component ID (e.g. example-element)"
read CHANGEME_COMPONENT_ID
validate_input "$CHANGEME_COMPONENT_ID" '^[a-z0-9-]+$' "Component ID must be lowercase letters, numbers, and hyphens (e.g. example-element)"

printf "%-46s: " "Enter Component Name (e.g. ExampleElement)"
read CHANGEME_COMPONENT_NAME
validate_input "$CHANGEME_COMPONENT_NAME" '^[A-Z][A-Za-z0-9]+$' "Component Name must be PascalCase (e.g. ExampleElement)"

printf "%-46s: " "Enter Component Title (e.g. Example Element)"
read CHANGEME_COMPONENT_TITLE
validate_input "$CHANGEME_COMPONENT_TITLE" '^[A-Za-z0-9 ]+$' "Component Title can only contain letters, numbers, and spaces (e.g. Example Element)"

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
    read -rp "Target directory for $CHANGEME_COMPONENT_ID already exists. Overwrite? (y/N): " confirm
    if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
        echo "Aborted."
        exit 1
    fi
    rm -rf "$TARGET_DIR"
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
mv "$TARGET_DIR/src/component.ts" "$TARGET_DIR/src/${CHANGEME_COMPONENT_ID}.ts"

echo
echo "Scaffold new component completed at $TARGET_DIR"
echo "Remember to update the example usage in packages/litte-components/$CHANGEME_COMPONENT_ID/README.md"
echo

# Ask if user wants to run pnpm install
printf "%-30s: " "Do you want to run 'pnpm install' now? (y/N)"
read run_pnpm
if [[ "$run_pnpm" =~ ^[Yy]$ ]]; then
    echo "Running pnpm install..."
    pnpm install
fi
echo "Done, exiting."
