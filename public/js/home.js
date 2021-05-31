// let getMainProjects = (github) => {
//     var apiUrl = 'https://api.github.com/users/' + github + '/repos';
//     fetch(apiUrl)
//     .then(function (response) {
//       if (response.ok) {
//         response.json().then(function (data) {
//           console.log(data)
//           displayMainProjects(data);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//   .catch(function (error) {
//     alert(error);
//   });
// }

// let displayMainProjects = (repos) => {
//     let mainURL = document.getElementById('userMainProjectURL').innerHTML;
//     let mainProjectInfo = document.getElementById('mainProjectInfo');
//     alert(mainURL)
//     console.log(repos[0].html_url)
//     for (var i = 0; i < repos.length; i++) {
//         console.log(repos[i]);
//         if (repos[i].html_url === mainURL) {
//             let desc = document.createElement('p');
//             desc.textContent = repos[i].description;
//             let lang = document.createElement('p');
//             lang.textContent = repos[i].language;
//             mainProjectInfo.appendChild(desc);
//             mainProjectInfo.appendChild(lang);
//         }
//         else {
//             alert("cant get githubdata")
//         }

//     }

// }





// $( document ).ready( () => {
//     let usergithubs = document.getElementById('userGithub').innerHTML;
//     if (usergithubs) {
//       getMainProjects(usergithubs);
//     } else {
//       alert('Unable to get mainprojects');
//     }
// });