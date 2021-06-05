

//This script only applies on the search.handlebars page





//..........................................search.form.........................................................




const getUsers = async () => {
  const locationCity = document.getElementById("location-city").value;
  const locationCountry = document.getElementById("location-country").value;
  const searchedTechnology = document.getElementById("technology").value;
  const searchedExperience = document.getElementById("experience").value;
  console.log(locationCity);
  console.log(locationCountry);
  console.log(searchedTechnology);
  console.log(searchedExperience);
  if (locationCity && locationCountry && searchedTechnology && searchedExperience) {
    location.replace(`./search-results?c=${locationCity}&co=${locationCountry}&t=${searchedTechnology}&e=${searchedExperience}`);

  } else if (locationCity && locationCountry && searchedTechnology) {
    location.replace(`./search-results?c=${locationCity}&co=${locationCountry}&t=${searchedTechnology}`);

  } else if (locationCity && locationCountry && searchedExperience) {
    location.replace(`./search-results?c=${locationCity}&co=${locationCountry}&e=${searchedExperience}`);

  } else if (searchedTechnology && searchedExperience && locationCity) {
    location.replace(`./search-results?c=${locationCity}&e=${searchedExperience}&t=${searchedTechnology}`);

  } else if (searchedTechnology && searchedExperience && locationCountry) {
    location.replace(`./search-results?co=${locationCountry}&e=${searchedExperience}&t=${searchedTechnology}`);

  } else if (locationCity && locationCountry) {
    location.replace(`./search-results?c=${locationCity}&co=${locationCountry}`);

  } else if (locationCity && searchedTechnology) {
    location.replace(`./search-results?c=${locationCity}&t=${searchedTechnology}`);

  } else if (locationCity && searchedExperience) {
    location.replace(`./search-results?c=${locationCity}&e=${searchedExperience}`);

  } else if (locationCountry && searchedTechnology) {
    location.replace(`./search-results?co=${locationCountry}&t=${searchedTechnology}`);

  } else if (locationCountry && searchedExperience) {
    location.replace(`./search-results?co=${locationCountry}&e=${searchedExperience}`);

  } else if (searchedExperience && searchedTechnology) {
    location.replace(`./search-results?e=${searchedExperience}&t=${searchedTechnology}`);

  } else if (locationCity) {
    location.replace(`./search-results?c=${locationCity}`);

  } else if (locationCountry) {
    location.replace(`./search-results?co=${locationCountry}`);

  } else if (searchedTechnology) {
    location.replace(`./search-results?t=${searchedTechnology}`);

  } else if (searchedExperience) {
    location.replace(`./search-results?e=${searchedExperience}`);

  }
}



//.........................................................night.mode................................................................

const theme = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var nav = document.querySelector("#nav");
  nav.classList.toggle("inverted");
}


//..........................................dropdown.........................................................

$('.dropdown').dropdown();



//..........................................start.........................................................


document.getElementById("search-user-button").addEventListener("click", getUsers);




//..........................................end........................................................
