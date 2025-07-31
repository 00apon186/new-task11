// src/app/utils/slugify.ts
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // space to dash
    .replace(/&/g, 'and')        // replace &
    .replace(/[^\w\-]+/g, '')    // remove non-word chars
    .replace(/\-\-+/g, '-');     // collapse dashes
}
