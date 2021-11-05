# Portfolio Page (Using React js)
A portfolio page which contains one's personal and technical data. This is built using *React JS* library. It also uses *JavaScript*, *CSS* and *HTML* etc. technologies.

## Pre-requisites and Installation 
1. To run and work with React js app, you need *Node.js* installed on your machine. Download latest version and more information for Node.js here https://nodejs.org/en/download/current/. 
2. You need to have code editor such as Visual Studio Code on your machine. It provides terminal to work ahead with GitHub and as well as to run the project. You can also install Git Bash / Git CLI. Find more information here : 
  a. Visual Studio Code : https://code.visualstudio.com/
  b. Git : https://git-scm.com/ 
3. You can clone the project from https://github.com/snehakale/portfolio-page-react.git to your directory on your machine. 
4. Open a terminal and hit the following command to run this project.
  `npm start`

## Code Examples 
This project contains a component based structure. Each component holds corresponding *js* and *css* files. 
Eg. *Summary* component at `src/components/summary/`has following files: 
(1) *Summary.js* - which contains the react **jsx** code 
``` 
function Summary(props) {
    return (
        <div className="summary-container">
            <p className="summary-data"> .......
```
(2) *Summary.css* - which containes style rulesets applicable for Summary container.
```
.summary-container {
    padding: 10px;
    margin: 10px 0;
    ......
```
## References
1. React JS local environment setup : https://www.geeksforgeeks.org/reactjs-setting-development-environment/
2. React JS components : https://www.geeksforgeeks.org/reactjs-components/ , https://reactjs.org/docs/components-and-props.html
3. React JS complete library : https://reactjs.org/

## Author 
Sneha Kale