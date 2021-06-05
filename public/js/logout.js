//This script is applied on every page except the login/signup page



//............................background.blur...............................

const myLogout = async () => {
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
document.querySelector('.logout-button').addEventListener('click', myLogout);


//............................modal...............................

$('.ui.basic.modal')
  .modal('show')
;


//............................time...............................

let currentDay = $("#currentDay");
updateCurrentTime();
setInterval(updateCurrentTime, 1000);
function updateCurrentTime() {
    currentDay.text(moment().format('YYYY'));
}




//..........................................end........................................................
