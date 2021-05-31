//Imports............................................
const { User } = require('../models');


//Seeds............................................
const userdata = [
 
 { id: 1,
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
  mainprojectname: 'pic-dersi'
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
    mainprojectname: 'markdown-cv'
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
    mainprojectname: 'go-sarah'
  },
];


//Init............................................
const seedUsers = () => User.bulkCreate(userdata);


//Exports............................................
module.exports = seedUsers;
