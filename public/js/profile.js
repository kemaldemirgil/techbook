var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var usersContainerEl = document.querySelector('.users-container');
let navOption = document.querySelector(".nav-option");
let myRepos = document.getElementById("myRepos");


const mainProject = async () => {
  const mainproject = document.querySelector('#myRepos').value.trim();
  alert("updated mainproject")
  console.log(mainproject);
  if (mainproject) {
    const response2 = await fetch('/api/users/mainproject', {
      method: 'PUT',
      body: JSON.stringify({ mainproject }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response2.statusText === 200) {
      document.location.replace('/profile');
    } else {
      console.log(response2);
    }
  }
};


const portfolioUpdate = async () => {
  const portfolio = document.querySelector('#portfolio-input').value;
  alert("updated portfolio")
  console.log(portfolio);
  if (portfolio) {
    const response = await fetch('/api/users/portfolio', {
      method: 'PUT',
      body: JSON.stringify({ portfolio }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.statusText === 200) {
      document.location.replace('/profile');
    } else {
      console.log(response);
    }
  }
};

const aboutmeUpdate = async () => {
  const aboutme = document.querySelector('#about-me').value;
  alert("updated aboutme")
  console.log(aboutme);
  if (aboutme) {
    const response = await fetch('/api/users/aboutme', {
      method: 'PUT',
      body: JSON.stringify({ aboutme }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.statusText === 200) {
      document.location.replace('/profile');
    } else {
      console.log(response);
    }
  }
};


const insertTech = async () => {
  const tech = document.querySelector('#tech-input').value.trim().toLowerCase();
  alert("inserting tech");
  console.log(tech);
  if (tech) {
    const response = await fetch('/api/users/tech', {
      method: 'POST',
      body: JSON.stringify({ tech }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 400) {
      alert("Tech Already Exists");
    } 
    if (response.ok) {
      document.location.reload();
    } else {
      console.log(response);
    }
  }
};


const addTech = async () => {
  const tech = document.querySelector('#techs').value;
  alert("adding tech");
  console.log(tech);
  if (tech) {
    const response = await fetch('/api/users/mytech', {
      method: 'PUT',
      body: JSON.stringify({ tech }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      location.reload();
    }
    if (response.status === 400) {
      alert("");
    } else {
      console.log(response);
    }
  }
};


$( document ).ready( () => {
  var username = nameInputEl.innerHTML.trim();
  if (username) {
    getUserRepos(username);
    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter a GitHub username');
  }
});

var getUserRepos = function (user) {
  var apiUrl = 'https://api.github.com/users/' + user + '/repos';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
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
    card.classList.add("ui", "card", "four", "wide", "column")

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

    let option = document.createElement('option');
    option.textContent = repos[i].name;
    myRepos.appendChild(option);
  }
};



$(".edit-profile-button").click(function() {
  $('.ui.modal').modal({
    onHide: function(){
      console.log('hidden');

  },
  onShow: function(){
      console.log('shown');
  },
  onApprove: function() {
      console.log('Approve');
      return validateModal()
  }
  })
  .modal('show');
});



document.querySelector('#add-tech-button').addEventListener('click', addTech);
document.querySelector('#insert-tech-button').addEventListener('click', insertTech);
document.querySelector('#about-me-button').addEventListener('click', aboutmeUpdate);
document.querySelector('#main-project-button').addEventListener('click', mainProject);
document.querySelector('#portfolio-button').addEventListener('click', portfolioUpdate);

