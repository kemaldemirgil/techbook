const signupFormHandler = async (event) => {
event.preventDefault();

const username = document.querySelector('#username-signup').value.trim();
const email = document.querySelector('#email-signup').value.trim();
const password = document.querySelector('#password-signup').value.trim();

if (username && email && password) {
    const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
    headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
    alert("Account created...")
    document.location.replace('/home');
    } else {
    alert('Failed to sign up.');
    }
}
};

document.getElementById('create-user').addEventListener('click', signupFormHandler);


////////////////////////////MODAL////////////////////////////
var modal = document.getElementById("myModal");
var btn = document.getElementById("modal-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(event) {event.preventDefault(); modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}