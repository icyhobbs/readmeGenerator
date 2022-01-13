// TODO: Include packages needed for this application

const inquirer = require ('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'title',
        message: "Project title?",

        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Enter your title");
                return false;
            }
        }
        },

        {
        type: 'input',
        name: 'description',
        message: "Description of your project?",
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Enter your description");
                return false;
                }
        }
        },

        {
        type: 'input',
        name: 'github',
        message: 'What is your Github name?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Enter your Github name");
                return false;
                }
        }
        },

        {
        type: 'input',
        name: 'email',
        message: 'Enter e-mail address?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Enter your e-mail address");
                return false;
                }
        }
        },

        {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for this project: ',
        choices:[
            "Apache",
            "Creative Commons",
            "GNU",
            "IBM",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
        ],
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please choose a license");
                return false;
                }
        }
        },

        {
        type: 'input',
        name: 'install',
        message: 'What is required to install your project?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter install steps");
                return false;
                }
        }
        },

        {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter usage");
                return false;
                }
        }
        },

        {
        type: 'input',
        name: 'test',
        message: 'How users test your application?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter test");
                return false;
                }
        }
        },

        {
        type: 'input',
        name: 'contributor',
        message: 'How to contribute to the repo?',
        validate: (value)=>{
            if(value){return true;
            }else{
                consloe.log("Please enter steps");
                return false;
                }
        }
        },
    ]);
};

// TODO: Create a function to write README file
const writeFile = data => {
fs.writeFile('README.md', data, err => {
    if(err){
        console.log(err);
        return;
    }else{
        console.log("README file successfully created!")
    }
})
}

// TODO: Create a function to initialize app
questions()
.then(answers => {
    return generateMarkdown(answers);
    })
.then(data => {
    return writeFile(data);
    })
.catch(err => {
    console.log(err)
    })


