//Imports............................................
const { User } = require('../models');


//Seeds............................................
const userdata = [
  {
    id: 1,
    username: 'mark',
    email: 'mark@mark.com',
    password: 'mark123',
    firstname: 'Mark',
    lastname: 'Dales',
    linkedin: 'marklinedkin',
    city: 'Ottawa',
    country: 'Canada',
    github: 'elipapa/markdown-cv',
    experience: 'junior'
  },
  {
    id: 2,
    username: 'sarah',
    email: 'sarah@sarah.com',
    password: 'sarah123',
    firstname: 'Sarah',
    lastname: 'Haras',
    linkedin: 'sarah',
    city: 'Toronto',
    country: 'Canada',
    github: 'oklahomer/go-sarah',
    experience: 'senior'
  },
];


//Init............................................
const seedUsers = () => User.bulkCreate(userdata);


//Exports............................................
module.exports = seedUsers;
