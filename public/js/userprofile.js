var nameInputEl = document.querySelector('#username');
var usersContainerEl = document.querySelector('.users-container');


$( document ).ready( () => {
    var username = nameInputEl.innerHTML.trim();
    if (username) {
      getUserRepos(username);
      nameInputEl.value = '';
    } else {
      alert('Please enter a GitHub username');
    }
  });
  
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