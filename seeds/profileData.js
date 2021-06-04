//Imports............................................
const { Profile } = require('../models');


//Seeds............................................
const profiledata = [
  {
    id: 1,
    userid: '1',
    aboutme: 'Hello!',
    portfolio: 'https://kemaldemirgil.github.io/kd-portfolio/',
    mainproject: 'kd-portfolio'
  },
  {
    id: 2,
    userid: '2',
    aboutme: 'Hello there! ',
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
    aboutme: 'I am a sr Developer',
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
  {
    id: 8,
    userid: '9',
    aboutme: 'I am a sr Developer',
    portfolio: 'https://github.com/gramps-project',
    mainproject: 'gramps'
  },
  { 
  id: 9,
  userid: '8',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/leech001/RF-BARRIER',
  mainproject: 'RF-BARRIER'
},
{ 
  id: 10,
  userid: '10',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/TheHamkerCat/WilliamButcherBot',
  mainproject: 'WilliamButcherBot'
},
{ 
  id: 11,
  userid: '11',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/psanford/wormhole-william',
  mainproject: 'wormhole-william'
},
{ 
  id: 12,
  userid: '12',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/whiteblock/hobbits',
  mainproject: 'hobbits'
},
{ 
  id: 13,
  userid: '13',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/dice-group/orca',
  mainproject: 'orca'
},
{ 
  id: 14,
  userid: '14',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/VernonGrant/VernonGrant',
  mainproject: 'VernonGrant'
},
{ 
  id: 15,
  userid: '15',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/seemoo-lab/frankenstein',
  mainproject: 'frankenstein'
},
{ 
  id: 16,
  userid: '16',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/txthinking/frank',
  mainproject: 'frank'
},
{ 
  id: 17,
  userid: '17',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/matter-labs-archive/FranklinPay-iOS',
  mainproject: 'FranklinPay-iOS'
},
{ 
  id: 18,
  userid: '18',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/NancyFx/Nancy',
  mainproject: 'Nancy'
},
{ 
  id: 19,
  userid: '19',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/catcherwong/Demos',
  mainproject: 'Demos'
},
{ 
  id: 20,
  userid: '20',
  aboutme: 'I am a Developer',
  portfolio: 'https://github.com/CarterCommunity/Carter',
  mainproject: 'Carter'
},
];


//Init............................................
const seedProfiles = () => Profile.bulkCreate(profiledata);


//Exports............................................
module.exports = seedProfiles;