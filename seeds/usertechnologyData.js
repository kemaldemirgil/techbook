//Imports............................................
const { UserTechnology } = require('../models');


//Seeds............................................
const usertechnologyData = [
  {
    id: 1,
    techid: '12',
    userid: '32',
  },
];


//Init............................................
const seedUserTechnologies = () => UserTechnology.bulkCreate(usertechnologyData);


//Exports............................................
module.exports = seedUserTechnologies;
