import { cac } from "cac";
import { dev } from "../dev";
const pkg = require("../../package.json");

const cli = cac(pkg.name);

cli
  .command("dev")
  //.option('--partial', 'allow only a subset of pages to be pre-rendered')
  .action(async (options) => {
    //const { partial, clientRouter, base, root } = options
    dev();
  });

cli.on("command:*", () => {
  console.error("Invalid command: %s", cli.args.join(" "));
});

cli.help();
cli.version(require("../../package.json").version);

cli.parse(
  process.argv.length === 2 ? [...process.argv, "--help"] : process.argv
);

process.on("unhandledRejection", (rejectValue) => {
  throw rejectValue;
});

console.log("h1");
