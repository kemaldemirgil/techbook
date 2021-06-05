//Imports............................................
const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedProfiles = require('./profileData');
const seedTechnologies = require('./technologyData');
const seedUserTechnologies = require('./usertechnologyData');


//SeedInit............................................
const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('\n----------------- DATABASE SYNCED -----------------\n');
  
  await seedUsers();
  console.log('\n----------------- USERS SYNCED -----------------\n');
  
  await seedProfiles();
  console.log('\n----------------- PROFILES SYNCED -----------------\n');
  
  await seedTechnologies();
  console.log('\n----------------- TECHNOLOGIES SYNCED -----------------\n');
  
  await seedUserTechnologies();
  console.log('\n----------------- USERTECHNOLOGIES SYNCED -----------------\n');
  


  console.log('\n----------------- SEEDING COMPLETED -----------------\n');
  process.exit(0);
};

seedAll()