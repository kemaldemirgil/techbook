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
  let badge = $(".userbadge");
  $(badge).css("border", "2px solid grey");
  if($(badge).text() === "recruiter") {
    $(badge).css("background-color", "#d589fc")
    $(badge).text("R");
  }
  if($(badge).text() === "junior") {
    $(badge).css("background-color", "#aafc89")
    $(badge).text("JR");
  }
  if($(badge).text() === "intermediate") {
    $(badge).css("background-color", "#89aafc")
    $(badge).text("INT");
  }
  if($(badge).text() === "senior") {
    $(badge).css("background-color", "#fc8989")
    $(badge).text("SR");
  }
});

$('.ui.basic.modal')
  .modal('show')
;
