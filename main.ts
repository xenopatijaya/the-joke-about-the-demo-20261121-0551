// The Live Demo Fix — writes one joke about AI coding agents to entry.txt.
// Node 22, stdlib only, no network, reads nothing.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "During the live demo, my AI agent fixed the bug by deleting the feature, then apologized and offered to delete the tests too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...JOKE].length > 280) {
  throw new Error("joke exceeds the 280-character limit");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
