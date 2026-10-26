import type { ArticleSection } from "@/lib/types";

const WORDS_PER_MINUTE = 200;

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Estimated reading time from actual section content, not a hardcoded guess. */
export function getReadingTime(sections: ArticleSection[]): string {
  const wordCount = sections.reduce((total, section) => {
    const paragraphWords = section.paragraphs.reduce((sum, p) => sum + countWords(p), 0);
    const bulletWords = (section.bullets ?? []).reduce((sum, b) => sum + countWords(b), 0);
    return total + countWords(section.heading) + paragraphWords + bulletWords;
  }, 0);

  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
