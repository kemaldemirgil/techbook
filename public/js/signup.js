const signupFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (document.getElementById('recruiter').checked) {
        const experience = "Recruiter";
        const firstname = document.querySelector('#firstname-recruiter-signup').value.trim();
        const lastname = document.querySelector('#lastname-recruiter-signup').value.trim();
        const city = document.querySelector('#city-recruiter-signup').value.trim();
        const country = document.querySelector('#country-recruiter-signup').value.trim();
        const linkedin = document.querySelector('#linkedin-recruiter-signup').value.trim();
        if (username && email && password && firstname && lastname && city && country) {
            const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password, firstname, lastname, city, country, linkedin, experience }),
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
        const experience = sliderValue;
        const firstname = document.querySelector('#firstname-developer-signup').value.trim();
        const lastname = document.querySelector('#lastname-developer-signup').value.trim();
        const city = document.querySelector('#city-developer-signup').value.trim();
        const country = document.querySelector('#country-developer-signup').value.trim();
        const github = document.querySelector('#github-developer-signup').value.trim();
        const linkedin = document.querySelector('#linkedin-developer-signup').value.trim();
        if (username && email && password && firstname && lastname && city && country && github && experience) {
            const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password, firstname, lastname, city, country, linkedin, github, experience }),
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


///////////////////////////////EXPERIENCE-SLIDER/////////////////////////////////////
let sliderValue;
const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    let value = +e.target.value
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`

    if (value >= 0 && value <= 33) {
        value = "junior"
    }
    if (value > 33 && value <= 66) {
        value = "intermediate"
    }
    if (value > 66 && value <= 100) {
        value = "senior"
    }
    label.innerHTML = value
    sliderValue = value;
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
