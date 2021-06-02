//Imports............................................
const router = require("express").Router();
const { User, Technology, UserTechnology, Profile } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



// ///////////////////////////////////////////////////////////////////////////////////



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
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      if (country) {
        const dbUserData = await User.findAll({
            where: {
              country: country,
            },
            include: [
              {
                model: UserTechnology,
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (city) {
        const dbUserData = await User.findAll({
            where: {
              city: city,
            },
            include: [
              {
                model: UserTechnology,
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (experience) {
        const dbUserData = await User.findAll({
            where: {
              experience: experience,
            },
            include: [
              {
                model: UserTechnology,
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (technology) {
        const dbUserData = await User.findAll({
            include: [
              {
                model: UserTechnology,
                where: {
                    name: technology
                },
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (city && country) {
        const dbUserData = await User.findAll({
            where: {
              city: city,
              country: country
            },
            include: [
              {
                model: UserTechnology,
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (city && experience) {
        const dbUserData = await User.findAll({
            where: {
              city: city,
              experience: experience
            },
            include: [
              {
                model: UserTechnology,
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (country && experience) {
        const dbUserData = await User.findAll({
            where: {
              [Op.and]: [
                { country: country },
                { experience: experience }
              ]
            },
            include: [
              {
                model: UserTechnology,
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (city && technology) {
        const dbUserData = await User.findAll({
            where: {
              city:city,
            },
            include: [
              {
                model: UserTechnology,
                where: {
                    name: technology
                }
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (country && technology) {
        const dbUserData = await User.findAll({
            where: {
              country:country,
            },
            include: [
              {
                model: UserTechnology,
                where: {
                    name: technology
                }
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (experience && technology) {
        const dbUserData = await User.findAll({
            where: {
              experience: experience,
            },
            include: [
              {
                model: UserTechnology,
                where: {
                    name: technology
                }
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (city && country && experience) {
        const dbUserData = await User.findAll({
            where: {
                city: city,
                country: country,
                experience: experience,
            },
            include: [
              {
                model: UserTechnology,
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (city && country && technology) {
        const dbUserData = await User.findAll({
            where: {
                city: city,
                country: country,
            },
            include: [
              {
                model: UserTechnology,
                where: {
                    name: technology,
                }
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (city && experience && technology) {
        const dbUserData = await User.findAll({
            where: {
                city: city,
                experience: experience,
            },
            include: [
              {
                model: UserTechnology,
                where: {
                    name: technology,
                }
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (experience && country && technology) {
        const dbUserData = await User.findAll({
            where: {
                experience: experience,
                country: country,
            },
            include: [
              {
                model: UserTechnology,
                where: {
                    name: technology,
                }
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
          res.status(200);
          res.render('searchresults', { userz, loggedIn: req.session.loggedIn, title: 'search-page', layout: 'main' });
      }
      if (city && country && experience && technology) {
        const dbUserData = await User.findAll({
            where: {
                city: city,
                country: country,
                experience: experience
            },
            include: [
              {
                model: UserTechnology,
                where: {
                    name: technology,
                }
              }
            ],
          });
          const userz = dbUserData.map(users => users.get({ plain: true }));
          console.log(userz);
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