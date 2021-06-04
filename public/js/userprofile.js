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

// tells page state is true
ifdark=true
const theme = () => {
  var userbackground = document.querySelector(".user-background");
  userbackground.classList.toggle("background");
  var profiletech = document.querySelector("#night-tech");
  profiletech.classList.toggle("inverted");
  var element = document.body;
  element.classList.toggle("dark-mode");
  var nav = document.querySelector("#nav");
  nav.classList.toggle("inverted");
  if (ifdark) {
    $(".divider").css({color:"white"})
    ifdark=!ifdark
  } else {
    $(".divider").css({color:"black"})
    ifdark=!ifdark
  }
};
  
var getUserRepos = async function (user) {
  var apiUrl = 'https://api.github.com/users/' + user + '/repos';

  await fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          // console.log(data)
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
  if($(badge).text() === "Star Hunter") {
    window.location.replace('/recruiter')
  }
});


$( document ).ready(() => {
  let badge = $(".userbadge");
  $(badge).css("border", "2px solid yellow");
  if($(badge).text() === "Star Hunter") {
    $(badge).css("background-color", "#fbbd08")
  }
  if($(badge).text() === "New Star") {
    $(badge).css("background-color", "#ffe596")
  }
  if($(badge).text() === "Bright Star") {
    $(badge).css("background-color", "#ffd865")
  }
  if($(badge).text() === "Super Star") {
    $(badge).css("background-color", "#fbbd08")
  }
});

const addStar = async () => {
  const userid = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  // console.log(userid);
  const response = await fetch('/api/users/star-user', {
    method: 'PUT',
    body: JSON.stringify({ userid }),
    headers: { 'Content-Type': 'application/json' },
  });
  // console.log(response)
  if (response.ok) {
    $('body')
    .toast({
      title: 'SUCCESS',
      message: 'Starrred User!',
      showProgress: 'bottom',
      class: 'success',
  });
  } else if (response.status === 429) {
    $('body')
      .toast({
      class: 'error',
      message: `Already Starred Today! `
    });
  }
}



const firstNameUpdate = async () => {
  const firstname = document.querySelector('#first-name-input').value;
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Your first name has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  if (firstname) {
    const response = await fetch('/api/users/firstname', {
      method: 'PUT',
      body: JSON.stringify({ firstname }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.statusText === 200) {
      document.location.replace('/profile');
    } else {
      console.log(response);
    }
  }
}





const stars = document.getElementById("star-user")
stars.addEventListener("click", addStar);