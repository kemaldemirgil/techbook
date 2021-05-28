//Imports............................................
const { User } = require('../models');


//Seeds............................................
const userdata = [
  {
    id: 1,
    username: 'mark',
    email: 'mark@mark.com',
    password: 'mark123',
    firstname: 'markfirstname',
    lastname: 'marklastname',
    linkedin: 'marklinedkin',
    city: 'ottawa',
    country: 'canada',
    github: 'mark',
    experience: 'junior'
  },
  {
    id: 2,
    username: 'sarah',
    email: 'sarah@sarah.com',
    password: 'sarah123',
    firstname: 'sarah',
    lastname: 'haras',
    linkedin: 'sarah',
    city: 'toronro',
    country: 'canada',
    github: 'sarah',
    experience: 'senior'
  },
];


//Init............................................
const seedUsers = () => User.bulkCreate(userdata);


//Exports............................................
module.exports = seedUsers;
