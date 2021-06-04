const signupFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (document.getElementById('recruiter').checked) {
        const experience = "Star Hunter";
        const firstname = document.querySelector('#firstname-recruiter-signup').value.trim();
        const lastname = document.querySelector('#lastname-recruiter-signup').value.trim();
        const city = document.querySelector('#city-recruiter-signup').value.trim();
        const country = document.querySelector('#country-recruiter-signup').value.trim();
        const linkedin = document.querySelector('#linkedin-recruiter-signup').value.trim()
        const avatar = "Zuko"
        if (username && email && password && firstname && lastname && city && country && avatar) {
            const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password, firstname, lastname, city, country, linkedin, experience, avatar }),
            headers: { 'Content-Type': 'application/json' },
            });
            if (response.status === 200) {
            alert("Account created...")
            document.location.replace('/home');
            } else {
            alert('Failed to sign up.');
            }
        } else {
            alert("Please enter the required fields.")
        }
    }
    if (document.getElementById('developer').checked) {
        const firstname = document.querySelector('#firstname-developer-signup').value.trim();
        const lastname = document.querySelector('#lastname-developer-signup').value.trim();
        const city = document.querySelector('#city-developer-signup').value.trim();
        const country = document.querySelector('#country-developer-signup').value.trim();
        const github = document.querySelector('#github-developer-signup').value.trim();
        const linkedin = document.querySelector('#linkedin-developer-signup').value.trim();
        const avatar = "Zuko"
        if (username && email && password && firstname && lastname && city && country && github && avatar) {
            const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password, firstname, lastname, city, country, linkedin, github, avatar }),
            headers: { 'Content-Type': 'application/json' },
            });
            if (response.status === 200) {
            alert("Account created...")
            document.location.replace('/home');
            } else {
            alert('Failed to sign up.');
            }
        } else {
            alert("Please enter the required fields.")
        }
    }
};

document.getElementById('create-developer').addEventListener('click', signupFormHandler);
document.getElementById('create-recruiter').addEventListener('click', signupFormHandler);


////////////////////////////MODAL////////////////////////////

var modal = document.getElementById("developer-modal");
var btn = document.getElementById("modal-button");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!document.getElementById('developer').checked && 
        !document.getElementById('recruiter').checked) {
        alert("Please select the account type")
    }
    if (document.getElementById('recruiter').checked) {
        modal = document.getElementById("recruiter-modal");
        modal.style.display = "block";
    }
    if (document.getElementById('developer').checked) {
        modal = document.getElementById("developer-modal");
        modal.style.display = "block";
    }
});

span.onclick = function() {modal.style.display = "none";}
span2.onclick = function() {modal.style.display = "none";}
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}