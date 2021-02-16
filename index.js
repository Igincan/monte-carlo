const fs = require("fs");

let scripts = {};

fs.readdirSync("monte-carlos").forEach((file) => {
    let fileContents = require(`./monte-carlos/${file}`);
    scripts[file.split(".")[0]] = fileContents.script;
});

if (process.argv.length < 3) {
    console.log("Usage:");
    console.log("   node index.js [name/index_of_monte_carlo]");
    console.log("Available Monte Carlos:");
    let index = 1;
    for (const name in scripts) {
        console.log(` ${index++} - ${name}`);
    }
    process.exit(1);
}

if (scripts[process.argv[2]]) {
    scripts[process.argv[2]]();
} else {
    let key = Object.keys(scripts)[process.argv[2] - 1];
    if (key) {
        scripts[key]();
    } else {
        console.log("Invalid name/index of Monte Carlo.");
        process.exit(2);
    }
}

