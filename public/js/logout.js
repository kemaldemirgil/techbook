const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};
document.querySelector('#logout').addEventListener('click', logout);

$( document ).ready(() => {
  let badge = $(".badge");
  console.log(badge)
  if($(badge).text() === "Recruiter") {
    $(badge).css("background-color", "purple")
    $(badge).text("R");
  }
  if($(badge).text() === "Junior") {
    $(badge).css("background-color", "green")
    $(badge).text("JR");
  }
  if($(badge).text() === "Intermediate") {
    $(badge).css("background-color", "blue")
    $(badge).text("INT");
  }
  if($(badge).text() === "Senior") {
    $(badge).css("background-color", "red")
    $(badge).text("SR");
  }
});

///////////////////////////////////////////////////////////////////////



const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.main-container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))
