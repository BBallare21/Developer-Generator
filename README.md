# Developer-Generator

## Files

   [index.js]
   [generateHTML.js]

## Functionality

   - Terminal will prompt for GitHub username and color choice
   - Once the selection has been made, an axios call will be used to call the information
   - The information will be sent to the generateHTML file
   - Electron will convert the html file to a pdf


* big picture items

 {-creating prompt
    -npm package inquirer
    -questions:
        -what is your username? input username
        -pick a color? checkbox color
        "response" is an object
      response = {
            username: "bballare21",
            color: "blue"
        }

            
 -axios call
    -npm axios} //this will be in the same function

 -converting to pdf

    -npm electron-html-to, util
    -html body
