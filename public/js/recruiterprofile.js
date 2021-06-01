const firstNameUpdate = async () => {
  const firstname = document.querySelector('#first-name-input').value;
  alert("updated firstname")
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
  alert("updated lastname")
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
  alert("updated city")
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
  alert("updated country")
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
  alert("updated email")
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
  alert("updated linkedin")
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


document.querySelector('#about-me-button').addEventListener('click', aboutmeUpdate);
document.querySelector('#first-name-button').addEventListener('click', firstNameUpdate);
document.querySelector('#last-name-button').addEventListener('click', lastNameUpdate);
document.querySelector('#city-button').addEventListener('click', cityUpdate);
document.querySelector('#country-button').addEventListener('click', countryUpdate);
document.querySelector('#email-button').addEventListener('click', emailUpdate);
document.querySelector('#linkedin-button').addEventListener('click', linkedinUpdate);

