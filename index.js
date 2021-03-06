const core = require('@actions/core');
const github = require('@actions/github');

try {
    const personToGreet = core.getInput('who-to-greet');
    console.log(`Hello there! ${personToGreet}`);

    const time = (new Date().toTimeString());
    core.setOutput("time", time);

    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`Generating event: ${payload}`);
} catch (error) {
    core.setFailed(error.message)
}