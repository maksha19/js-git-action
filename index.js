const core = require("@actions/core");
const github = require("@actions/github");

const name = core.getInput("welcome-to");

console.log(`Hello ${name}`);

const time = new Date().toTimeString();

core.setOutput("time", time);
