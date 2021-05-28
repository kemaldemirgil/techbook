//Imports............................................
const { User } = require('../models');


//Seeds............................................
const userdata = [
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
const seedUsers = () => User.bulkCreate(userdata);


//Exports............................................
module.exports = seedUsers;
