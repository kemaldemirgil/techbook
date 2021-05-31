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
  {
    id: 2,
    userid: '2',
    aboutme: 'I am a Jr Developer',
    portfolio: 'https://github.com/elipapa/markdown-cv',
    mainproject: 'https://github.com/elipapa/markdown-cv'
  },
  {
    id: 3,
    userid: '3',
    aboutme: 'I am a Jr Developer',
    portfolio: 'https://github.com/oklahomer/go-sarah',
    mainproject: 'https://github.com/oklahomer/go-sarah'
  },
];


//Init............................................
const seedProfiles = () => Profile.bulkCreate(profiledata);


//Exports............................................
module.exports = seedProfiles;