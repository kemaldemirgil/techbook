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


$('.ui.basic.modal')
  .modal('show')
;


let currentDay = $("#currentDay");
updateCurrentTime();
setInterval(updateCurrentTime, 1000);
function updateCurrentTime() {
    currentDay.text(moment().format('DD M YYYY'));
}