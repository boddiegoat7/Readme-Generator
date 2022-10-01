// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  
  const input = license
  
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
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
    function renderLicenseLink(license) {
        
      const input = license;
        
      switch (input) {
          
          case 'MPL':
            response = "(https://opensource.org/licenses/MPL-2.0)";
            return response;
    
          case 'ODbl':
            response = "(https://opendatacommons.org/licenses/odbl/)";
            return response;
    
          case 'GPL':
            response = "(http://www.gnu.org/licenses/gpl-3.0)";
            return response;
    
          case 'MIT':
            response = "(https://opensource.org/licenses/MIT)";
            return response;
    
          case 'ISC':
            response = "(https://opensource.org/licenses/ISC)";
            return response;
    
          case 'None':
            response = "";
            return response;
    };

  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license == "") {
    return "";
  }
  else {
    return `

## License
-The project has ${license} license. The link for this can be found here: [${license}]${renderLicenseLink(license)}`;

  };



}


// TODO: Create a function to generate markdown for README
  
  function generateMarkdown(data) {
    
    return `# ${data.title}

    ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## TABLE OF CONTENTS
  - [DESCRIPTION](#description)
  - [PACKAGES](#packages)
  - [INSTALLION](#installation)
  - [Usage](#usage)
  - [LICENSE](#license)
  - [CONTRIBUTE](#contribute)
  - [TEST](#test)
  - [QUESTION](#questions)

## DESCRIPTION
        
- ${data.description}

## PACKAGES

- ${data.packages}


## INSTALATION
      
- ${data.installation}

## USAGE

- ${data.usage}
${renderLicenseSection(data.license)}

## CONTRIBUTE

- ${data.contributing}

## TEST
      
- ${data.test}

## QUESTIONS

Please message me if you have any question about the project at:

-[$GitHub: [${data.username}](https://github.com/${data.username})
        
or
        
-email: [${data.email}](mailto:${data.email}})

    `;



  };

  

  module.exports = generateMarkdown;
