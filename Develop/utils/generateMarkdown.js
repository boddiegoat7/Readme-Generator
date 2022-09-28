// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const license = license
    switch (input) {
      case 'MPL':
        response = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
        return response;
    
      case 'ODbl':
        response = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]';
        return response;
    
      case 'GPL':
        response = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]';
        return response;
      
      case 'MIT':
        response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
        return response;
      
      case 'ISC':
        response = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
        return response;
      
      case 'None':
        response = "";
        return response;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
    function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

`;
}

module.exports = generateMarkdown;
