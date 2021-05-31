//Imports............................................
const { Profile } = require('../models');


//Seeds............................................
const profiledata = [
  {
    id: 1,
    userid: '1',
    aboutme: 'ssd',
    portfolio: 'https://kemaldemirgil.github.io/kd-portfolio/',
    mainproject: 'https://kemaldemirgil.github.io/kd-portfolio/'
  },
];


//Init............................................
const seedProfiles = () => Profile.bulkCreate(profiledata);


//Exports............................................
module.exports = seedProfiles;