//Imports............................................
const router = require('express').Router();
const developerRoutes = require('./developer-routes');
const recruiterRoutes = require('./recruiter-routes');
const loginRoute = require('./login-routes');

//Navigator..........................................
router.use('/users', developerRoutes);
router.use('/recruiter',recruiterRoutes);
router.use('/login',loginRoute)

//Exports............................................
module.exports = router;
