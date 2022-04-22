const core = require("@actions/core");
const github = require("@actions/github");

try {
  core.debug("debug log");
  core.warning("warning log");
  core.error("error log");
  const name = core.getInput("welcome-to");
  core.setSecret(name);

  console.log(`Hello ${name}`);

  const time = new Date().toTimeString();

  core.setOutput("time", time);
  core.exportVariable("HELLO", name);
} catch (e) {
  core.setFailed(e.message);
}
