//Imports............................................
const { Technology } = require('../models');


//Seeds............................................
const technologyData = [
  {
    id: 1,
    techname: 'javascript',
  },
  {
    id: 2,
    techname: 'css',
  },
];


//Init............................................
const seedTechnologies = () => Technology.bulkCreate(technologyData);


//Exports............................................
module.exports = seedTechnologies;