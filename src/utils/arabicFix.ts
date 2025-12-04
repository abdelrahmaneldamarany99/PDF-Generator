// arabicFix.ts

// --- Arabic shaping + RTL fixing ---
import { arabic } from "arabi-helpers"; 

export function fixArabic(input: string) {
  if (!input) return "";
  return arabic(input);
}
