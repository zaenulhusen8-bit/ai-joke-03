// ai-joke-03 entry: writes one one-liner about AI coding agents to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in for /output locally).
// Node 22, standard library only, deterministic: the same joke every run.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'I asked my coding agent for the smallest possible change. It renamed one variable — in 214 files.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
