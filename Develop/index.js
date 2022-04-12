// TODO: Include packages needed for this application
const fs = require("fs");
var inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of this project?",
  },
  {
    type: "input",
    name: "motivation",
    message: "What was your motivation for this project?",
  },
  {
    type: "input",
    name: "problem",
    message: "What problem does this project solve?",
  },
  {
    type: "input",
    name: "learnings",
    message: "what did you learn from this project?",
  },
  {
    type: "input",
    name: "steps",
    message: "what steps are required to install and use this application?",
  },
  {
    type: "input",
    name: "licenses",
    message:
      "what licenses and/or third-party assets were used while building this project?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How can one contribute to this project?",
  },
  {
    type: "input",
    name: "credits",
    message: "Was there anyone in particular that helped with this project?",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Call generate markdown function and pass in answers
      var markdown = generateMarkdown(answers);
      writeToFile("./output/README.md", markdown);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
