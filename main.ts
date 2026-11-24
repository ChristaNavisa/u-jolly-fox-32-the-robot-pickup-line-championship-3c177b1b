import { mkdirSync, writeFileSync } from "node:fs";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
}

// One pickup line a robot would use: the joke grows out of being a machine
// (built to pass the Turing test), and the turn lands at the end.
const LINE =
  "I was built to pass the Turing test, but one look at you and I failed on purpose.";

writeEntry(resolveOutDir(), LINE);
