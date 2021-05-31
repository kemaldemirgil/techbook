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
  {
    id: 3,
    techname: 'node.js',
  },
  {
    id: 4,
    techname: 'jquery',
  },
  {
    id: 5,
    techname: 'express.js',
  },
  {
    id: 6,
    techname: 'mysql',
  },
];


//Init............................................
const seedTechnologies = () => Technology.bulkCreate(technologyData);


//Exports............................................
module.exports = seedTechnologies;