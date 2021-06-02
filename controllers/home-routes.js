//Imports............................................
const router = require("express").Router();
const { User, Technology, UserTechnology, Profile } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
    const mainProjectsDB = await User.findAll({
      where: {
        [Op.or]: [{experience: 'junior'}, {experience: 'intermediate'}, {experience: 'senior'}]
      }
    });
    const user = dbUserData.get({ plain: true })
    const mainprojects = mainProjectsDB.map(project => project.get({ plain: true }));
    console.log(mainprojects);
    console.log(user);
    res.status(200);
    res.render('home', { user, mainprojects, loggedIn: req.session.loggedIn, firstLog: req.session.firstlog, title: 'home-page', layout: 'main' });
    req.session.firstlog = false;
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
    if (req.session.experience === "recruiter") {
      const dbUserData = await User.findOne({
        where: {
          username: req.session.username,
        },
      });
      const userprofileData = await Profile.findOne({
        where: {
          userid: req.session.user_id
        },
        attributes: ['aboutme'],
      });
      const userprofile = userprofileData.get({ plain: true });
      const user = dbUserData.get({ plain: true });
      // console.log(userprofile);
      // console.log(user);
      res.status(200);
      res.render('recruiterprofile', { user, userprofile, title: 'recruiter-profile-page', layout: 'main' });
    } else {
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
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET//http://localhost:3001/
router.get("/profile/:id", async (req, res) => {
  const userData = await User.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'username',
      'email',
      'firstname',
      'lastname',
      'city',
      'country',
      'github',
      'experience',
      'usermainproject',
      'mainprojectname',
      'avatar'
    ],
  });
  const techData = await UserTechnology.findAll({
    where: {
      userid: req.params.id
    },
    attributes: [
      'techid',
      'userid',
      'name'
    ],
  });
  const profileData = await Profile.findOne({
    where: {
      userid: req.params.id
    },
    attributes: [
      'userid',
      'aboutme',
      'portfolio',
      'mainproject'
    ],
  });
  const userprofile = profileData.get({ plain: true });
  const usertechname = techData.map(post => post.get({ plain: true }));
  const user = userData.get({ plain: true });
  console.log(userprofile);
  console.log(usertechname);
  console.log(user);
  res.status(200);
  res.render('userprofile', {user, usertechname, userprofile, title: 'user-profile-page', layout: 'main' });
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
    const Technames = await Technology.findAll({
      attributes: [
        'id',
        'techname'
      ]
    });
    const user = dbUserData.get({ plain: true })
    const technames = Technames.map(post => post.get({ plain: true }));
    console.log(user);
    res.status(200);
    res.render('search', { user, technames ,loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//GET//http://localhost:3001/search-results
router.get("/search-results", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
    const country = req.query.co;
    const city = req.query.c;
    const experience = req.query.e;
    const technology = req.query.t;
    if (country === "") {
      country = false;
    }
    if (city === "") {
      city = false;
    }
    if (experience === "") {
      experience = false;
    }
    if (technology === "") {
      technology = false;
    }
    if (country) {
      const dbUserData = await User.findAll({
          where: {country: country},
          include: [{model: UserTechnology}],
        });
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (city) {
      const dbUserData = await User.findAll({where: {city: city},
          include: [{model: UserTechnology}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (experience) {
      const dbUserData = await User.findAll({where: {experience: experience},
          include: [{model: UserTechnology}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (technology) {
      const dbUserData = await User.findAll({
          include: [{model: UserTechnology,
              where: {name: technology}}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (city && country) {
      const dbUserData = await User.findAll({
          where: {city: city,country: country},
          include: [{model: UserTechnology}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (city && experience) {
      const dbUserData = await User.findAll({
          where: {city: city,experience: experience},
          include: [{model: UserTechnology}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (country && experience) {
      const dbUserData = await User.findAll({
          where: {[Op.and]: [{ country: country },{ experience: experience }]},
          include: [{model: UserTechnology,}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (city && technology) {
      const dbUserData = await User.findAll({
          where: {city:city,},
          include: [{model: UserTechnology,
              where: {name: technology}}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (country && technology) {
      const dbUserData = await User.findAll({
          where: {country:country,},
          include: [{model: UserTechnology,
              where: {name: technology}}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (experience && technology) {
      const dbUserData = await User.findAll({
          where: {experience: experience,},
          include: [{model: UserTechnology,
              where: {name: technology}}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (city && country && experience) {
      const dbUserData = await User.findAll({
          where: {city: city,country: country,experience: experience,},
          include: [{model: UserTechnology}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (city && country && technology) {
      const dbUserData = await User.findAll({
          where: {city: city,country: country,},
          include: [{model: UserTechnology,
              where: {name: technology}}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (city && experience && technology) {
      const dbUserData = await User.findAll({
          where: {city: city,experience: experience,},
          include: [{model: UserTechnology,
              where: {name: technology}}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (experience && country && technology) {
      const dbUserData = await User.findAll({
          where: {experience: experience,country: country},
          include: [{model: UserTechnology,
              where: {name: technology}}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
    if (city && country && experience && technology) {
      const dbUserData = await User.findAll({
          where: {city: city,country: country,experience: experience},
          include: [{model: UserTechnology,
              where: {name: technology}}]});
        const userz = dbUserData.map(users => users.get({ plain: true }));
        res.status(200);
        res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//Exports............................................
module.exports = router;