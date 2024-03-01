// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    

    else {
      return (null)
    }
    
    `
  } 
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## table of contents
  * [description](#description)
  * [installation](#installation)
  * [usage](#usage)
  * [contributing](#contributing)
  * [tests](#tests)
  * [questions](#questions)



  ##description
  ${data.description}



  ##installation
  ${data.installation}



  ##usage
  ${data.usage}



  ##contributing
  ${data.contributing}



  ##tests
  ${data.tests}


  ##license
  ${data.license}



  ##questions
  if you have any questions email me at [${data.email}](mailto:${data.email})
  check out my github [${data.github}](https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;
