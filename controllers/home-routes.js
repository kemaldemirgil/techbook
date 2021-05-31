//Imports............................................
const router = require("express").Router();
const { User, Technology, UserTechnology, Profile } = require('../models');

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
  res.render('login', { title: 'login-page', layout: 'signup' });
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
    const mainProjectsDB = await User.findAll();
    const user = dbUserData.get({ plain: true })
    const mainprojects = mainProjectsDB.map(project => project.get({ plain: true }));
    console.log(mainprojects);
    console.log(user);
    res.status(200);
    res.render('home', { user, mainprojects, loggedIn: req.session.loggedIn, title: 'home-page', layout: 'main' });
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
    const dbTechnames = await Technology.findAll({
      attributes: [
        'id',
        'techname'
      ]
    });
    const usertech = await UserTechnology.findAll({
      where: {
        userid: req.session.user_id
      },
      attributes: [
        'techid',
        'userid',
        'name'
      ],
    });
    const userprofileData = await Profile.findOne({
      where: {
        userid: req.session.user_id
      },
      attributes: [
        'aboutme',
        'portfolio',
        'mainproject'
      ],
    });
    const userprofile = userprofileData.get({ plain: true });
    const usertechname = usertech.map(post => post.get({ plain: true }));
    const user = dbUserData.get({ plain: true });
    const technames = dbTechnames.map(post => post.get({ plain: true }));
    // console.log(userprofile);
    // console.log(usertechname);
    // console.log(technames);
    // console.log(user);
    res.status(200);
    res.render('profile', { user, technames, usertechname, userprofile, title: 'profile-page', layout: 'main' });
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
    res.render('search', { user, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Exports............................................
module.exports = router;
