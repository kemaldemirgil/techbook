//Imports............................................
const router = require('express').Router();
const developerRoutes = require('./developer-routes');

//Navigator..........................................
router.use('/users', developerRoutes);


//Exports............................................
module.exports = router;
