export function nameShortener(name: string) {
  return name.length > 12 ?  name.substring(0, 12 - 3) + '...' : name
}