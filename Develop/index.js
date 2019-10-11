const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const electron = require("electron-html-to");
const html = require("./generateHTML.js")

function promptUser() {
inquirer.prompt([
    {
    type: "input",
    message: "Enter your GitHub username:",
    name: "username"
    },
    {
    type: "checkbox",
    name: html.colors,
    message: "What color would you like?",
    choices: [{name: "green"}, {name: "blue"}, {name: "pink"}, {name: "red"}],
    }
])
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
      let profileImage = res.data.avatar_url;
      console.log(profileImage);
      let userName = res.data.name;
      console.log(userName);
      let company = res.data.company;
      console.log(company);
      let location = res.data.location;
      console.log(location);
      let profile = res.data.html_url;
      console.log(profile);
      let blog = res.data.blog;
      console.log(blog);
      let bio = res.data.bio;
      console.log(bio);
      let repo = res.data.public_repos;
      console.log(repo);
      let followers = res.data.followers;
      console.log(followers);
      let stars = res.data.public_gists;
      console.log(stars);
      let following = res.data.following;
      console.log(following);
    });
    function getStars(username){
        const starUrl = `https://api.github.com/users/${username}/repos?per_page=100`
        return axios.get(starUrl)
            .then(response => {
                return response.data.reduce((total, curr) => {
                    total += curr.stargazers_count;
                    return total
                }, 0)
                
            })
    }
    getStars()
  });
};

  promptUser();

// const questions = [
  
// ];

// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();
