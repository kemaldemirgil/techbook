//Imports............................................
const { Profile } = require('../models');


//Seeds............................................
const profiledata = [
  {
    id: 1,
    userid: '1',
    aboutme: 'Hello! Im admin!',
    portfolio: 'https://kemaldemirgil.github.io/kd-portfolio/',
    mainproject: 'kd-portfolio'
  },
  {
    id: 2,
    userid: '2',
    aboutme: 'I am a Jr Developer',
    portfolio: 'https://github.com/elipapa/markdown-cv',
    mainproject: 'markdown-cv'
  },
  {
    id: 3,
    userid: '3',
    aboutme: 'I am a SR Developer',
    portfolio: 'https://github.com/oklahomer/go-sarah',
    mainproject: 'go-sarah'
  },
  {
    id: 4,
    userid: '4',
    aboutme: 'I am a int Developer',
    portfolio: 'https://github.com/denis/jbuilder',
    mainproject: 'jbuilder'
  },
  {
    id: 5,
    userid: '5',
    aboutme: 'I am a int Developer',
    portfolio: 'https://github.com/kim/picky-rs',
    mainproject: 'picky-rs'
  },
  {
    id: 6,
    userid: '6',
    aboutme: 'I am a sr Developer',
    portfolio: 'https://github.com/tom/node-deploy-app',
    mainproject: 'node-deploy-app'
  },
  {
    id: 7,
    userid: '7',
    aboutme: 'I am a sr Developer',
    portfolio: 'https://github.com/stephanie/travel-bot',
    mainproject: 'travel-bot'
  },
];


//Init............................................
const seedProfiles = () => Profile.bulkCreate(profiledata);


//Exports............................................
module.exports = seedProfiles;