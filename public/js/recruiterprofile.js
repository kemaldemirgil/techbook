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

    if (response.statusText === 200) {
      document.location.replace('/profile');
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

    if (response.statusText === 200) {
      document.location.replace('/profile');
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

    if (response.statusText === 200) {
      document.location.replace('/profile');
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

    if (response.statusText === 200) {
      document.location.replace('/profile');
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

    if (response.statusText === 200) {
      document.location.replace('/profile');
    } else {
      console.log(response);
    }
  }
}

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

    if (response.statusText === 200) {
      document.location.replace('/profile');
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
    message: 'Technology has been updated!',
    showProgress: 'bottom',
    class: 'success',
  });
  if (avatar) {
    const response = await fetch('/api/users/avatar', {
      method: 'PUT',
      body: JSON.stringify({ avatar }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      location.reload();
    } else {
      $('body')
      .toast({
      class: 'error',
      message: `Select an avatar !  !`
    });
    }
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
      class: 'warning',
      displayTime: 0,
      closeIcon: true,
      message: 'Please fill in your about me...'
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
document.querySelector('#about-me-button').addEventListener('click', aboutmeUpdate);
document.querySelector('#first-name-button').addEventListener('click', firstNameUpdate);
document.querySelector('#last-name-button').addEventListener('click', lastNameUpdate);
document.querySelector('#city-button').addEventListener('click', cityUpdate);
document.querySelector('#country-button').addEventListener('click', countryUpdate);
document.querySelector('#email-button').addEventListener('click', emailUpdate);
document.querySelector('#linkedin-button').addEventListener('click', linkedinUpdate);

