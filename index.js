const core = require("@actions/core");
const github = require("@actions/github");

try {
  throw new Error("testing action failed");
  const name = core.getInput("welcome-to");

  console.log(`Hello ${name}`);

  const time = new Date().toTimeString();

  core.setOutput("time", time);
} catch (e) {
  core.setFailed(e.message);
}
