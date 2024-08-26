export function classes(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
