//Imports............................................
const router = require("express").Router();
const { User } = require('../models');

//HomeRoutes........................................

//GET//http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/home');
      return;
    }
    res.render('signup', { title: 'signup-page', layout: 'signup' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//GET//http://localhost:3001/login
router.get("/login", (req, res) => {
  res.render('login', { title: 'signup-page', layout: 'signup' });
});


//GET//http://localhost:3001/questions
router.get("/questions", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/home");
    return;
  }
  res.render('questions', { title: 'questions-page', layout: 'questions' });
});


//GET//http://localhost:3001/home
router.get("/home", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
    const dbUserData = await User.findOne({
      where: {
        username: req.session.username,
      },
    });
    const user = dbUserData.get({ plain: true })
    console.log(user);
    res.status(200);
    res.render('home', { user, title: 'home-page', layout: 'main' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET//http://localhost:3001/profile
router.get("/profile", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
    const dbUserData = await User.findOne({
      where: {
        username: req.session.username,
      },
    });
    const user = dbUserData.get({ plain: true })
    console.log(user);
    res.status(200);
    res.render('profile', { user, title: 'profile-page', layout: 'main' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET//http://localhost:3001/search
router.get("/search", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
    const dbUserData = await User.findOne({
      where: {
        username: req.session.username,
      },
    });
    const user = dbUserData.get({ plain: true })
    console.log(user);
    res.status(200);
    res.render('search', { user, title: 'search-page', layout: 'main' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Exports............................................
module.exports = router;
