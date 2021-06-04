//Imports............................................
const { User } = require('../models');


//Seeds............................................
const userdata = [
  { 
    id: 1,
    username: 'kemal',
    email: 'kemal@kemal.com',
    password: 'Admin123',
    firstname: 'Kemal',
    lastname: 'Kanok',
    linkedin: 'kemallinedkin',
    city: 'Ottawa',
    country: 'Canada',
    github: 'kemalkanok',
    experience: 'intermediate',
    usermainproject: 'https://github.com/kemalkanok/pic-dersi',
    mainprojectname: 'pic-dersi',
    avatar: 'Aang',
    stars: 55
  },
  {
    id: 2,
    username: 'mark',
    email: 'mark@mark.com',
    password: 'mark123',
    firstname: 'Mark',
    lastname: 'Dales',
    linkedin: 'marklinedkin',
    city: 'Ottawa',
    country: 'Canada',
    github: 'elipapa',
    experience: 'junior',
    usermainproject: 'https://github.com/elipapa/markdown-cv',
    mainprojectname: 'markdown-cv',
    avatar: 'Zhao',
    stars: 12
  },
  {
    id: 3,
    username: 'sarah',
    email: 'sarah@sarah.com',
    password: 'sarah123',
    firstname: 'Sarah',
    lastname: 'Haras',
    linkedin: 'sarah',
    city: 'Toronto',
    country: 'Canada',
    github: 'oklahomer',
    experience: 'senior',
    usermainproject: 'https://github.com/oklahomer/go-sarah',
    mainprojectname: 'go-sarah',
    avatar: 'Katara',
    stars: 102
  },
  {
    id: 4,
    username: 'Denis',
    email: 'denis@denis.com',
    password: 'denis123',
    firstname: 'Denis',
    lastname: 'Barushev',
    linkedin: 'denis',
    city: 'Montreal',
    country: 'Canada',
    github: 'denis',
    experience: 'senior',
    usermainproject: 'https://github.com/denis/jbuilder',
    mainprojectname: 'jbuilder',
    avatar: 'Hakoda',
    stars: 144
  },
  {
    id: 5,
    username: 'kim',
    email: 'kimmy@kimmy.com',
    password: 'kimmy123',
    firstname: 'Kim',
    lastname: 'Altintop',
    linkedin: 'kim',
    city: 'Munich',
    country: 'Germany',
    github: 'kim',
    experience: 'intermediate',
    usermainproject: 'https://github.com/kim/picky-rs',
    mainprojectname: 'picky-rs',
    avatar: 'Zuko',
    stars: 56
  },
  {
    id: 6,
    username: 'tom',
    email: 'tommy@tommy.com',
    password: 'tommy123',
    firstname: 'Tom',
    lastname: 'Malone',
    linkedin: 'tom',
    city: 'Toronto',
    country: 'Canada',
    github: 'tom',
    experience: 'senior',
    usermainproject: 'https://github.com/tom/node-deploy-app',
    mainprojectname: 'node-deploy-app',
    avatar: 'Ozai',
    stars: 183
  },
  {
    id: 7,
    username: 'stephanie',
    email: 'stephanie@stephanie.com',
    password: 'stephanie123',
    firstname: 'Stephanie',
    lastname: 'Siaw',
    linkedin: 'stephanie',
    city: 'Toronto',
    country: 'Canada',
    github: 'stephanie',
    experience: 'senior',
    usermainproject: 'https://github.com/stephanie/travel-bot',
    mainprojectname: 'travel-bot',
    avatar: 'Katara',
    stars: 122
  }
];


//Init............................................
const seedUsers = () => User.bulkCreate(userdata);


//Exports............................................
module.exports = seedUsers;
