//Imports............................................
const router = require('express').Router();
const { User } = require('../../models');

//HomeRoutes........................................

//POST//http://localhost:3001/api/users/
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      city: req.body.city,
      country: req.body.country,
      github: req.body.github,
      linkedin: req.body.linkedin,
      experience: req.body.experience,
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


  //Exports............................................
  module.exports = router;
  