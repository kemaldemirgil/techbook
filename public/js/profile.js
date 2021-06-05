var nameInputEl = document.querySelector('#username');
var usersContainerEl = document.querySelector('.users-container');
let myRepos = document.getElementById("myRepos");
let userGithub = document.getElementById("usergithub");

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

    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }
}

const lastNameUpdate = async () => {
  const lastname = document.querySelector('#last-name-input').value;
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Your last name has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  if (lastname) {
    const response = await fetch('/api/users/lastname', {
      method: 'PUT',
      body: JSON.stringify({ lastname }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }
}


const cityUpdate = async () => {
  const city = document.querySelector('#city-input').value;
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Your city has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  if (city) {
    const response = await fetch('/api/users/city', {
      method: 'PUT',
      body: JSON.stringify({ city }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }
}


const countryUpdate = async () => {
  const country = document.querySelector('#country-input').value;
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Your country has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  if (country) {
    const response = await fetch('/api/users/country', {
      method: 'PUT',
      body: JSON.stringify({ country }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }
}


const emailUpdate = async () => {
  const email = document.querySelector('#email-input').value;
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Your email has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  if (email) {
    const response = await fetch('/api/users/email', {
      method: 'PUT',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }
}


const linkedinUpdate = async () => {
  const linkedin = document.querySelector('#linkedin-input').value;
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Your linkedin has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  if (linkedin) {
    const response = await fetch('/api/users/linkedin', {
      method: 'PUT',
      body: JSON.stringify({ linkedin }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }
}


const githubUpdate = async () => {
  const github = document.querySelector('#github-input').value;
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Your github has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  if (github) {
    const response = await fetch('/api/users/github', {
      method: 'PUT',
      body: JSON.stringify({ github }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }
}



const mainProject = async () => {
  const mainproject = document.querySelector('#myRepos').value.trim();
  const usermainproject = `${userGithub}/${mainproject}`;
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Your main project has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  console.log(mainproject);
  if (mainproject) {
    const response2 = await fetch('/api/users/mainproject', {
      method: 'PUT',
      body: JSON.stringify({ mainproject, usermainproject }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response2.ok) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }
};


const portfolioUpdate = async () => {
  const portfolio = document.querySelector('#portfolio-input').value;
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Your portfolio has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  console.log(portfolio);
  if (portfolio) {
    const response = await fetch('/api/users/portfolio', {
      method: 'PUT',
      body: JSON.stringify({ portfolio }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }
};

const aboutmeUpdate = async () => {
  const aboutme = document.querySelector('#about-me').value;
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Your about me has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  console.log(aboutme);
  if (aboutme) {
    const response = await fetch('/api/users/aboutme', {
      method: 'PUT',
      body: JSON.stringify({ aboutme }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }
};


const insertTech = async () => {
  const tech = document.querySelector('#tech-input').value.trim().toLowerCase();
  console.log(tech);
  if (tech) {
    const response = await fetch('/api/users/tech', {
      method: 'POST',
      body: JSON.stringify( {tech} ),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      $('body')
      .toast({
        title: 'SUCCESS',
        message: 'A new technology been added!',
        showProgress: 'bottom',
        class: 'success',
      });
      window.location.reload();
    } else if (response.status === 400 ) {
      $('body')
      .toast({
      class: 'error',
      message: `Tech already exists ! `
      });
    }
  }
};


const addTech = async () => {
  const tech = document.querySelector('#techs').value;
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Technology has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  console.log(tech);
  if (tech) {
    const response = await fetch('/api/users/mytech', {
      method: 'PUT',
      body: JSON.stringify({ tech }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }
};

const addAvatar = async () => {

  const avatar = document.querySelector('#avatar-input').value;
  console.log(`Avatar => ${avatar}`);
  $('body')
  .toast({
    title: 'SUCCESS',
    message: 'Avatar has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  if (avatar) {
    const response = await fetch('/api/users/avatar', {
      method: 'PUT',
      body: JSON.stringify({ avatar }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      location.reload();
    } else {
      $('body')
      .toast({
      class: 'error',
      message: `Select an avatar !`
    });
    }
  }
};


const deleteAccount = async () => {
  const response = await fetch('/api/users/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    location.reload();
  } else {
    alert(response.statusText);
  }
}

document.getElementById("delete-button").addEventListener("click", () => {
  $('body')
  .toast({
    message: 'Are you sure you want to delete your account? All your stars will be deleted as well.',
    displayTime: 0,
    class: 'black',
    classActions: 'left vertical attached',
    actions:	[{
      text: 'Delete Account',
      class: 'red',
      click: function() {
        $('body').toast({message:'Account Deleted'});
        deleteAccount();
      }
    },{
      text: 'Nevermind',
      class: 'green',
      click: function() {
        $('body').toast({message:'Hooray!'});
      }
    }]
  });
})


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
        $('body').toast({
        class: 'error',
        message: `An error occured !`
        });
      }
    })
  .catch(function (error) {
    $('body')
    .toast({
      class: 'error',
      message: `An error occured !`
    });
  });
};

var displayRepos = function (repos) {
  if (repos.length === 0) {
    usersContainerEl.textContent = 'No repositories found.';
    return;
  }
  for (var i = 0; i < repos.length; i++) {
    
    var repoName = 'https://github.com/'+repos[i].owner.login + '/' + repos[i].name;

    var card = document.createElement('div');
    card.classList.add("ui", "card", "yellow")

    var content = document.createElement('div');
    content.classList.add("content")

    var header = document.createElement('a');
    header.classList.add("center", "aligned", "header");
    header.setAttribute('href', repoName);
    header.setAttribute('target', "_blank");
    header.textContent = repos[i].name;

    var icon = document.createElement('i');
    icon.classList.add("github", "icon");

    var description = document.createElement('div');
    description.classList.add("center", "aligned", "meta");

    var desctext = document.createElement('a');
    desctext.textContent = repos[i].description;
    desctext.setAttribute('href', repoName);
    desctext.setAttribute('target', "_blank");

    card.appendChild(content);
    header.appendChild(icon);
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

$('.dropdown')
  .dropdown()
;


if ($("#aboutme-toast").text() === "1") {
  $('body')
    .toast({
      class: 'purple',
      displayTime: 0,
      closeIcon: true,
      message: 'Please fill in your about me...'
    })
  ;

}
if ($("#portfolio-toast").text() === "1") {
  $('body')
    .toast({
      class: 'blue',
      displayTime: 0,
      closeIcon: true,
      message: 'Please link your portfolio...'
    })
  ;

}
if ($("#mainproject-toast").text() === "1") {
  $('body')
    .toast({
      class: 'yellow',
      displayTime: 0,
      closeIcon: true,
      message: 'Please select a main project...'
    })
  ;

}
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


$( document ).ready( () => {
  var username = nameInputEl.innerHTML.trim();
  if (username) {
    getUserRepos(username);
    nameInputEl.value = '';
  } else {
    $('body')
    .toast({
    class: 'error',
    message: `No github under this name !`
  });
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


document.querySelector('#avatar-button').addEventListener('click', addAvatar);
document.querySelector('#add-tech-button').addEventListener('click', addTech);
document.querySelector('#insert-tech-button').addEventListener('click', insertTech);
document.querySelector('#about-me-button').addEventListener('click', aboutmeUpdate);
document.querySelector('#main-project-button').addEventListener('click', mainProject);
document.querySelector('#portfolio-button').addEventListener('click', portfolioUpdate);
document.querySelector('#first-name-button').addEventListener('click', firstNameUpdate);
document.querySelector('#last-name-button').addEventListener('click', lastNameUpdate);
document.querySelector('#city-button').addEventListener('click', cityUpdate);
document.querySelector('#country-button').addEventListener('click', countryUpdate);
document.querySelector('#email-button').addEventListener('click', emailUpdate);
document.querySelector('#linkedin-button').addEventListener('click', linkedinUpdate);
document.querySelector('#github-button').addEventListener('click', githubUpdate);

