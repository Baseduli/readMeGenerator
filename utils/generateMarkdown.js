const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "what does this project do?",
      name: "description",
    },
    {
      type: "input",
      message: "how do you install this project?",
      name: "installation",
    },
    {
      type: "input",
      message: "how do you use this project?",
      name: "usage",
    },
    {
      type: "input",
      message: "who contributed to this project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "what tests were run on this project?",
      name: "tests",
    },
    {
      type: "list",
      message: "what license does this project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      name: "license",
    }
  ])

  .then(function (data) {
    const markdown = generateMarkdown(data);
    fs.writeFile("README.md", markdown, (err) => {
      if (err) throw err;
      console.log("The file has been created!");
    });
  }),

  // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    if (license === "MIT") {
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if ("APACHE 2.0") {
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    } else if ("GPL 3.0") {
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    } else if ("BSD 3") {
      return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    } else {
      return "";
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ##Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contribution)
  -[License](#license)
  -[Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;
