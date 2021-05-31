//Imports............................................
const { UserTechnology } = require('../models');


//Seeds............................................
const usertechnologyData = [
  {
    id: 1,
    techid: '1',
    userid: '1',
    name: 'javascript',
  },
  {
    id: 2,
    techid: '2',
    userid: '1',
  },
  {
    id: 3,
    techid: '3',
    userid: '1',
  },
  {
    id: 4,
    techid: '4',
    userid: '1',
  },
  {
    id: 5,
    techid: '5',
    userid: '1',
  },
  {
    id: 6,
    techid: '6',
    userid: '1',
  },
  {
    id: 7,
    techid: '7',
    userid: '1',
  },
  {
    id: 8,
    techid: '8',
    userid: '1',
  },
  {
    id: 9,
    techid: '9',
    userid: '1',
  },
  {
    id: 10,
    techid: '11',
    userid: '1',
  },  {
    id: 11,
    techid: '1',
    userid: '2',
  },
  {
    id: 12,
    techid: '2',
    userid: '2',
  },
  {
    id: 13,
    techid: '3',
    userid: '2',
  },
  {
    id: 14,
    techid: '4',
    userid: '2',
  },
  {
    id: 15,
    techid: '11',
    userid: '2',
  },
];


//Init............................................
const seedUserTechnologies = () => UserTechnology.bulkCreate(usertechnologyData);


//Exports............................................
module.exports = seedUserTechnologies;
