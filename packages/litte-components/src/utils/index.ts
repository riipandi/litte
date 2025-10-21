// Portions of this code are derived from https://github.com/lukeed/clsx.
// The `clsx` package are licensed under the MIT license.

/**
 * Recursively converts a value (string, number, array, or object) to a space-separated string.
 * Used internally by clsx.
 */
function toVal(mix: unknown): string {
  if (typeof mix === 'string' || typeof mix === 'number') {
    return String(mix)
  }
  if (Array.isArray(mix)) {
    return mix.map(toVal).filter(Boolean).join(' ')
  }
  if (typeof mix === 'object' && mix !== null) {
    return Object.entries(mix)
      .filter(([_, v]) => Boolean(v))
      .map(([k]) => k)
      .join(' ')
  }
  return ''
}

/**
 * Utility to conditionally join classNames together.
 * Accepts strings, numbers, arrays, or objects (where truthy values are included).
 * Example: clsx('a', { b: true, c: false }, ['d', null]) => 'a b d'
 */
export function clsx(...args: unknown[]): string {
  return args.map(toVal).filter(Boolean).join(' ')
}
