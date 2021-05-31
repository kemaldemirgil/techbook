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
  if($(badge).text() === "recruiter") {
    $(badge).css("background-color", "purple")
    $(badge).text("R");
  }
  if($(badge).text() === "junior") {
    $(badge).css("background-color", "green")
    $(badge).text("JR");
  }
  if($(badge).text() === "Intermediate") {
    $(badge).css("background-color", "blue")
    $(badge).text("INT");
  }
  if($(badge).text() === "senior") {
    $(badge).css("background-color", "red")
    $(badge).text("SR");
  }
});
