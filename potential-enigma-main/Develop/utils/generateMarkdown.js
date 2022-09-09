// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// https://img.shields.io/badge/license-${license}-blue.svg
// https://img.shields.io/badge/license-${MIT}-blue.svg


function renderLicenseBadge(license) 
{ if (license!=="None"){
  return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
}



}





// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license!=="None"){
  return `[license](#license)`
}
}






// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


function renderLicenseSection(license) {
  if (license!=="None"){
    return `## License`
  }
}










// TODO: Create a function to generate markdown for README

function generateMarkdown(data) { 
  
  renderLicenseBadge(data.license) 


  return `# ${data.title}
  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
  
## Description
${data.description}


## Installation
${data.description}



  ## License
  ${renderLicenseBadge(data.license)}
  `;
  
}

module.exports = generateMarkdown;
