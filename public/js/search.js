


const getUsers = async () => {

  const locationCity = $("#location-city").value.trim();
  const locationCountry = $("#location-country").value.trim();
  const searchedTechnology = $("#technology").value;
  const searchedExperience = $("#experience").value;
  if (locationCity && locationCountry && searchedTechnology && searchedExperience) {
    const response = await fetch('/search/users', {
      method: ''
    })
  }
}
























$('.dropdown')
.dropdown()
;

document.getElementById("search-user-button").addEventListener("click", getUsers);