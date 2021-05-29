//Imports............................................
const User = require('./User');
const UserTechnology = require('./UserTechnology');
const Technology = require('./Technology');
const Profile = require('./Profile');

// relationships..........................
User.hasOne(Profile, {
    foreignKey: 'userid'
});

User.hasMany(UserTechnology, {
    foreignKey: 'userid'
});

Technology.hasMany(UserTechnology, {
    foreignKey: 'techid'
});

UserTechnology.belongsTo(User, {
    foreignKey: 'userid'
})

Profile.belongsTo(User, {
    foreignKey: 'userid'
});

//Exports............................................
module.exports = { User, UserTechnology, Technology, Profile };
