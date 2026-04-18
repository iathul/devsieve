export function quoteLines(text: string): string {
  return text
    .split(/\r?\n/)
    .map((line) => (line.trim() ? `"${line.trim()}"` : line))
    .join('\n');
}
