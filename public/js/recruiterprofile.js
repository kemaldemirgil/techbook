//This script applies on the recruiter recruiterprofile.handlebars




//...............................run........................................

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


//...............................run........................................

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





//...............................run........................................


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





//...............................run........................................



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



//...............................run........................................



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



//...............................run........................................



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



//...............................run........................................



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



//...............................run........................................



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



//...............................delete........................................



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





//...............................edit.profile.modal........................................




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




//...............................a.toast........................................



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

//...............................delete.toast........................................



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

//...............................night.mode........................................


ifdark = true;


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




//...............................badge.color........................................


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






//...............................start........................................



document.querySelector('#avatar-button').addEventListener('click', addAvatar);
document.querySelector('#about-me-button').addEventListener('click', aboutmeUpdate);
document.querySelector('#first-name-button').addEventListener('click', firstNameUpdate);
document.querySelector('#last-name-button').addEventListener('click', lastNameUpdate);
document.querySelector('#city-button').addEventListener('click', cityUpdate);
document.querySelector('#country-button').addEventListener('click', countryUpdate);
document.querySelector('#email-button').addEventListener('click', emailUpdate);
document.querySelector('#linkedin-button').addEventListener('click', linkedinUpdate);





//..........................................end........................................................
