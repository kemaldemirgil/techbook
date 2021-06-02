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
  {
    id: 21,
    techid: '1',
    userid: '4',
    name: 'JavaScript',
  },
  {
    id: 22,
    techid: '2',
    userid: '4',
    name: 'CSS',
  },
  {
    id: 23,
    techid: '3',
    userid: '4',
    name: 'HTML',
  },
  {
    id: 24,
    techid: '4',
    userid: '4',
    name: 'SQL',
  },
  {
    id: 25,
    techid: '11',
    userid: '4',
    name: 'PowerShell',
  },
  {
    id: 26,
    techid: '1',
    userid: '5',
    name: 'JavaScript',
  },
  {
    id: 27,
    techid: '2',
    userid: '5',
    name: 'CSS',
  },
  {
    id: 28,
    techid: '3',
    userid: '5',
    name: 'HTML',
  },
  {
    id: 29,
    techid: '4',
    userid: '5',
    name: 'SQL',
  },
  {
    id: 30,
    techid: '11',
    userid: '5',
    name: 'PowerShell',
  },
  {
    id: 31,
    techid: '1',
    userid: '6',
    name: 'JavaScript',
  },
  {
    id: 32,
    techid: '2',
    userid: '6',
    name: 'CSS',
  },
  {
    id: 33,
    techid: '3',
    userid: '6',
    name: 'HTML',
  },
  {
    id: 34,
    techid: '4',
    userid: '6',
    name: 'SQL',
  },
  {
    id: 35,
    techid: '11',
    userid: '6',
    name: 'PowerShell',
  },
  {
    id: 36,
    techid: '1',
    userid: '7',
    name: 'JavaScript',
  },
  {
    id: 37,
    techid: '2',
    userid: '7',
    name: 'CSS',
  },
  {
    id: 38,
    techid: '3',
    userid: '7',
    name: 'HTML',
  },
  {
    id: 39,
    techid: '4',
    userid: '7',
    name: 'SQL',
  },
  {
    id: 40,
    techid: '11',
    userid: '7',
    name: 'PowerShell',
  },
];


//Init............................................
const seedUserTechnologies = () => UserTechnology.bulkCreate(usertechnologyData);


//Exports............................................
module.exports = seedUserTechnologies;
