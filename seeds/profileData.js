//Imports............................................
const { Profile } = require('../models');


//Seeds............................................
const profiledata = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@admin.com',
    password: 'admin123',
  },
  {
    id: 2,
    username: 'sarah',
    email: 'sarah@sarah.com',
    password: 'sarah123',
  },
];


//Init............................................
const seedProfiles = () => Profile.bulkCreate(profiledata);


//Exports............................................
module.exports = seedProfiles;