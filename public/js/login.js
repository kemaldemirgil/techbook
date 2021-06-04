const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        alert("Success!")
        document.location.replace('/home');
      } else {
        alert('Failed to log in.');
      }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

////////////////////////////BACKGROUND-BLUR////////////////////////////
const password = document.getElementById('password-login')
const background = document.querySelector('.imgBx')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 5 - length * 0.5
  background.style.filter = `blur(${blurValue}px)`
})

$( document ).ready( () => {
  background.style.filter = `blur(5px)`
});

////////////////////////////MODAL////////////////////////////

var modal = document.getElementById("password-modal");
var btn = document.querySelector(".forgotpassword");
var span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = "block";
});

span.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}
