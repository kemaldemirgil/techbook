//Imports............................................
const { Profile } = require('../models');


//Seeds............................................
const profiledata = [
  {
    id: 1,
    userid: '1',
    imagetype: 'sd',
    imagename: 'ssd',
    imagedata: 'ssd',
    aboutme: 'ssd',
    contactme: "asdas@asdasd.com"
  },
];


//Init............................................
const seedProfiles = () => Profile.bulkCreate(profiledata);


//Exports............................................
module.exports = seedProfiles;