// Created array for the license badges
const licenseArray = ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "BSD 2- Clause License", "Eclipse Public License 1.0", "The MIT License", "The Artistic License", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "IBM Public License Version 1.0", "ISC License (ISC)"]
// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArray[0]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license === licenseArray[1]) {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if (license === licenseArray[2]) {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if (license === licenseArray[3]) {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  }
  else if (license === licenseArray[4]) {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else if (license === licenseArray[5]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license === licenseArray[6]) {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  }
  else if (license === licenseArray[7]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if (license === licenseArray[8]) {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  else if (license === licenseArray[9]) {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  }
  else if (license === licenseArray[10]) {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  }
  else if (license === licenseArray[11]) {
    return "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)"
  }
  else if (license === licenseArray[12]) {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  else if (license === licenseArray[13]) {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  else {
    return ""
  }
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArray[0]) {
    return `[${licenseArray[0]}](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === licenseArray[1]) {
    return `[${licenseArray[1]}](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if (license === licenseArray[2]) {
    return `[${licenseArray[2]}](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (license === licenseArray[3]) {
    return `[${licenseArray[3]}](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (license === licenseArray[4]) {
    return `[${licenseArray[4]}](https://opensource.org/licenses/EPL-1.0)`
  }
  else if (license === licenseArray[5]) {
    return `[${licenseArray[5]}](https://opensource.org/licenses/MIT)`
  }
  else if (license === licenseArray[6]) {
    return `[${licenseArray[6]}](https://opensource.org/licenses/Artistic-2.0)`
  }
  else if (license === licenseArray[7]) {
    return `[${licenseArray[7]}](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === licenseArray[8]) {
    return `[${licenseArray[8]}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  else if (license === licenseArray[9]) {
    return `[${licenseArray[9]}](https://www.gnu.org/licenses/agpl-3.0)`
  }
  else if (license === licenseArray[10]) {
    return `[${licenseArray[10]}](https://www.gnu.org/licenses/lgpl-3.0)`
  }
  else if (license === licenseArray[11]) {
    return `[${licenseArray[11]}](https://www.gnu.org/licenses/fdl-1.3)`
  }
  else if (license === licenseArray[12]) {
    return `[${licenseArray[12]}](https://opensource.org/licenses/IPL-1.0)`
  }
  else if (license === licenseArray[13]) {
    return `[${licenseArray[13]}](https://opensource.org/licenses/ISC)`
  }
  else {
    return ""
  }
};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    
    ## [License](#table-of-contents)

    License badge applies to the following application:

    ${renderLicenseBadge(license)}
    `;
  }
  else {
    return "";
  }
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ${renderLicenseSection(data.license)}
  

  ## [Description](#table-of-contents)
  ${data.description}

  ## [Installation](#table-of-contents)
  ${data.installation}

  ## [Usage](#table-of-contents)
  ${data.usage}

  ## [How to Contribute](#table-of-contents)
  ${data.contributing}

  ## [Tests](#table-of-contents)
  ${data.testing}

  ## [Questions](#table-of-contents)
  * Contact Me at:
  [${data.github}](https://github.com/${data.github})
  ${data.email}
`;
};

module.exports = generateMarkdown;
