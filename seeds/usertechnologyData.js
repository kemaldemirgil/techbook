//Imports............................................
const { UserTechnology } = require('../models');


//Seeds............................................
const usertechnologyData = [
  {
    id: 1,
    techid: '1',
    userid: '1',
  },
];


//Init............................................
const seedUserTechnologies = () => UserTechnology.bulkCreate(usertechnologyData);


//Exports............................................
module.exports = seedUserTechnologies;
