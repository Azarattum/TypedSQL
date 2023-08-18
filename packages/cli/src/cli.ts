#!/usr/bin/env node

import { program } from "commander";
import Analyzer from "./Analyzer.js";

program.requiredOption(
  "-p, --project <path>",
  "Path to the typescript project to analyze. This should be the directory containing the tsconfig.json."
);
program.option(
  "-t, --tsconfig <name>",
  "_name_ of your tsconfig file. Defaults to tsconfig.json"
);
program.option("-s, --sql", "create SQL files from TypeScript schemas");

program.parse();

const options = program.opts();
const projectPath = options.project;
const createSqlFiles = !!options.sql;
const tsconfig = options.tsconfig;

new Analyzer(
  { createSqlFiles },
  projectPath,
  tsconfig || "tsconfig.json"
).start();
