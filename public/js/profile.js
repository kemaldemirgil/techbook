var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var usersContainerEl = document.querySelector('.users-container');
let navOption = document.querySelector(".nav-option");


$( document ).ready( () => {
  console.log("fetching repos")
  var username = nameInputEl.innerHTML.trim();
    console.log(username);
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
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayRepos(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
  .catch(function (error) {
    alert('Unable to connect to GitHub');
  });
};

var displayRepos = function (repos) {
  if (repos.length === 0) {
    repoContainerEl.textContent = 'No repositories found.';
    return;
  }
  for (var i = 0; i < repos.length; i++) {

    var divEl = document.createElement('div');


    var repoName = 'https://github.com/'+repos[i].owner.login + '/' + repos[i].name;
    var repoEl = document.createElement('a');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';

    repoEl.setAttribute('href', repoName);
    repoEl.setAttribute('target', "_blank");

    var titleEl = document.createElement('span');
    titleEl.textContent = repos[i].name;

    divEl.appendChild(titleEl);
    repoEl.appendChild(titleEl);





    // var statusEl = document.createElement('span');
    // statusEl.classList = 'flex-row align-center';

    // if (repos[i].open_issues_count > 0) {
    //   statusEl.innerHTML =
    //     "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
    // } else {
    //   statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    // }
    // repoEl.appendChild(statusEl);
    divEl.appendChild(repoEl);
    usersContainerEl.appendChild(divEl);
    let repos = document.getElementById("myRepos");
    let option = document.createElement('option');
    option.innerHTML = repos[i].name;
    repos.appendChild(option);
  }
};

