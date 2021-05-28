//Imports............................................
const router = require('express').Router();
const userRoutes = require('./user-routes');


//Navigator..........................................
router.use('/users', userRoutes);


//Exports............................................
module.exports = router;
