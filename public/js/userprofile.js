var nameInputEl = document.querySelector('#username');
var usersContainerEl = document.querySelector('.users-container');


$( document ).ready( () => {
    var username = nameInputEl.innerHTML.trim();
    if (username) {
      getUserRepos(username);
      nameInputEl.value = '';
    } else {
      console.log("error");
    }
});

const theme = () => {
  var userbackground = document.querySelector(".user-background");
  userbackground.classList.toggle("background");
  var profiletech = document.querySelector("#night-tech");
  profiletech.classList.toggle("inverted");
  var element = document.body;
  element.classList.toggle("dark-mode");
  var nav = document.querySelector("#nav");
  nav.classList.toggle("inverted");
}
  
var getUserRepos = async function (user) {
  var apiUrl = 'https://api.github.com/users/' + user + '/repos';

  await fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data)
          displayRepos(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
  .catch(function (error) {
    alert(error);
  });
};

var displayRepos = function (repos) {
  if (repos.length === 0) {
    repoContainerEl.textContent = 'No repositories found.';
    return;
  }
  for (var i = 0; i < repos.length; i++) {
    
    var repoName = 'https://github.com/'+repos[i].owner.login + '/' + repos[i].name;

    var card = document.createElement('div');
    card.classList.add("ui", "card")

    var content = document.createElement('div');
    content.classList.add("content")

    var header = document.createElement('a');
    header.classList.add("center", "aligned", "header");
    header.setAttribute('href', repoName);
    header.setAttribute('target', "_blank");
    header.textContent = repos[i].name;

    var description = document.createElement('div');
    description.classList.add("center", "aligned", "meta");

    var desctext = document.createElement('a');
    desctext.textContent = repos[i].description;
    desctext.setAttribute('href', repoName);
    desctext.setAttribute('target', "_blank");

    card.appendChild(content);
    content.appendChild(header);
    content.appendChild(description);
    description.appendChild(desctext);
    usersContainerEl.appendChild(card);
  }
};


$( document ).ready(() => {
  let badge = $(".userbadge");
  if($(badge).text() === "recruiter") {
    window.location.replace('/recruiter')
  }
});


$( document ).ready(() => {
  let badge = $(".userbadge");
  $(badge).css("border", "2px solid grey");
  if($(badge).text() === "recruiter") {
    $(badge).css("background-color", "#d589fc")
    $(badge).text("R");
  }
  if($(badge).text() === "junior") {
    $(badge).css("background-color", "#aafc89")
    $(badge).text("JR");
  }
  if($(badge).text() === "intermediate") {
    $(badge).css("background-color", "#89aafc")
    $(badge).text("INT");
  }
  if($(badge).text() === "senior") {
    $(badge).css("background-color", "#fc8989")
    $(badge).text("SR");
  }
});