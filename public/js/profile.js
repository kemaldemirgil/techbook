// function profilePictureHandler(event) {
//     event.preventDefault();
//     const img = document.querySelector(".img-input").value;
//     console.log(img);
//     const response = await fetch(`/profile/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         profile_image,
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
    
//     if (response.ok) {
//       alert("Post updated...")
//       fetch('/profile').then(
//         document.location.replace('/profile')
//     )} else {
//       alert(response.statusText);
//     }
// }
    


// var str = 'test/category/1';
// str.slice(0, str.lastIndexOf('/') + 1);
// // => "test/category/"
// img.slice(str.lastIndexOf('/') + 1);
// // => 1



// const profilePictureHandler = async (event) => {
//   event.preventDefault();

//   const img = document.querySelector(".img-input").value;
//   // const email = document.querySelector('#email-signup').value.trim();
//   // const password = document.querySelector('#password-signup').value.trim();
//   var x = img.split("");
//   var y = x[x.length - 1]; // Or parts.pop();
//   console.log(y)
//   if (y) {
//     const response = await fetch('/profile', {
//       method: 'POST',
//       body: JSON.stringify({ y }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create user-img.');
//     }
//   } else {
//     alert("js error");
//   }
// };


// document.querySelector('.profile-picture').addEventListener('submit', profilePictureHandler);