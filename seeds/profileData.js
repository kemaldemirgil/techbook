//Imports............................................
const { Profile } = require('../models');


//Seeds............................................
const profiledata = [
  {
    id: 1,
    userid: '1',
    profilepic: '/user-images/mark1.jpg',
    aboutme: 'I am a junior developer who is interested in full-stack development.    I have recently completed the Carleton University Full-Stack Boot Camp program.',
  },
  {
    id: 2,
    userid: '2',
    profilepic: '/user-images/sarah2.jpg',
    aboutme: 'I am a senior developer.   I have been working as a C# developer using Oracle',
  },
];


//Init............................................
const seedProfiles = () => Profile.bulkCreate(profiledata);


//Exports............................................
module.exports = seedProfiles;