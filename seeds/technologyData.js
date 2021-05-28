//Imports............................................
const { Technology } = require('../models');


//Seeds............................................
const technologyData = [
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
const seedTechnologies = () => Technology.bulkCreate(technologyData);


//Exports............................................
module.exports = seedTechnologies;