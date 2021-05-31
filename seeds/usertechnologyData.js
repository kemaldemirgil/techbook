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
    name: 'CSS',
  },
  {
    id: 3,
    techid: '3',
    userid: '1',
    name: 'HTML',
  },
  {
    id: 4,
    techid: '4',
    userid: '1',
    name: 'SQL',
  },
  {
    id: 5,
    techid: '5',
    userid: '1',
    name: 'Python',
  },
  {
    id: 6,
    techid: '6',
    userid: '1',   
    name: 'C',
  },
  {
    id: 7,
    techid: '7',
    userid: '1',
    name: 'C#',
  },
  {
    id: 8,
    techid: '8',
    userid: '1',
    name: 'C++',
  },
  {
    id: 9,
    techid: '9',
    userid: '1',
    name: 'PHP',
  },
  {
    id: 10,
    techid: '11',
    userid: '1',
    name: 'PowerShell',
  },  
  {
    id: 11,
    techid: '1',
    userid: '2',
    name: 'Javasript',
  },
  {
    id: 12,
    techid: '2',
    userid: '2',
    name: 'CSS',
  },
  {
    id: 13,
    techid: '3',
    userid: '2',
    name: 'HTML',
  },
  {
    id: 14,
    techid: '4',
    userid: '2',
    name: 'SQL',
  },
  {
    id: 15,
    techid: '11',
    userid: '2',
    name: 'PowerShell',
  },
  {
    id: 16,
    techid: '1',
    userid: '3',
    name: 'JavaScript',
  },
  {
    id: 17,
    techid: '2',
    userid: '3',
    name: 'CSS',
  },
  {
    id: 18,
    techid: '3',
    userid: '3',
    name: 'HTML',
  },
  {
    id: 19,
    techid: '4',
    userid: '3',
    name: 'SQL',
  },
  {
    id: 20,
    techid: '11',
    userid: '3',
    name: 'PowerShell',
  },
];


//Init............................................
const seedUserTechnologies = () => UserTechnology.bulkCreate(usertechnologyData);


//Exports............................................
module.exports = seedUserTechnologies;
