//Imports............................................
const router = require('express').Router();
// const { Sequelize } = require('sequelize/types');
const { User, Profile, UserTechnology, Technology } = require('../../models');

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
      avatar: "Aang"
    });
    await Profile.create({
      userid: dbUserData.id,
      aboutme: null,
      portfolio: null,
      mainproject: null,
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      req.session.firstlog = true;
      res.status(200).json(dbUserData);
      req.session.star = false;
      req.session.experience = dbUserData.experience;
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




//POST//http://localhost:3001/api/users/login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
      req.session.experience = dbUserData.experience;
      req.session.star = false;
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//PUT//http://localhost:3001/api/users/mainproject
router.put('/mainproject', (req, res) => {
  Profile.update({
    mainproject: req.body.mainproject,
    userid: req.session.user_id
  },
  {
    where: {
      userid: req.session.user_id
    }
  })
  User.update({
    usermainproject: req.body.usermainproject,
    mainprojectname: req.body.mainproject
  },
  {
    where: {
      id: req.session.user_id
    }
  })
  .then(dbUserData => {
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No mainproject found..' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//PUT//http://localhost:3001/api/users/portfolio
router.put('/portfolio', (req, res) => {
  Profile.update({
    portfolio: req.body.portfolio,
    userid: req.session.user_id
  },
  {
    where: {
      userid: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No mainproject found..' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//PUT//http://localhost:3001/api/users/firstname
router.put('/firstname', (req, res) => {
  User.update({
    firstname: req.body.firstname,
  },
  {
    where: {
      id: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No firstname found..' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//PUT//http://localhost:3001/api/users/lastname
router.put('/lastname', (req, res) => {
  User.update({
    lastname: req.body.lastname,
  },
  {
    where: {
      id: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No lastname found..' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//PUT//http://localhost:3001/api/users/city
router.put('/city', (req, res) => {
  User.update({
    city: req.body.city,
  },
  {
    where: {
      id: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No city found..' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//PUT//http://localhost:3001/api/users/country
router.put('/country', (req, res) => {
  User.update({
    country: req.body.country,
  },
  {
    where: {
      id: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No country found..' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//PUT//http://localhost:3001/api/users/email
router.put('/email', (req, res) => {
  User.update({
    email: req.body.email,
  },
  {
    where: {
      id: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No email found..' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//PUT//http://localhost:3001/api/users/linkedin
router.put('/linkedin', (req, res) => {
  User.update({
    linkedin: req.body.linkedin,
  },
  {
    where: {
      id: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No linkedin found..' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//PUT//http://localhost:3001/api/users/github
router.put('/github', (req, res) => {
  User.update({
    github: req.body.github,
  },
  {
    where: {
      id: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No github found..' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//PUT//http://localhost:3001/api/users/aboutme
router.put('/aboutme', (req, res) => {
  Profile.update({
    aboutme: req.body.aboutme,
    userid: req.session.user_id
  },
  {
    where: {
      userid: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No mainproject found..' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST//http://localhost:3001/api/users/tech
router.post('/tech', async (req, res) => {
  try {
    await Technology.findOne({
      where: {
        techname: req.body.tech
      },
    }).then(techData => {
      if (techData) {
        res.status(400).json({ message: 'Tech already exists' });
        return;
      } else if (!techData) {
        Technology.create({
          techname: req.body.tech
        });
        res.status(200).json(techData);
      }
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//PUT//http://localhost:3001/api/users/mytech
router.put('/mytech', async (req, res) => {
  try {
    const tech = await Technology.findOne({
      where: {
        techname: req.body.tech,
      },
    });
    const techData = tech.get({ plain: true});
    console.log(techData);
    await UserTechnology.findOne({
      where: {
        userid: req.session.user_id,
        techid: techData.id,
        name: techData.techname
      },
    }).then(data => {
      if (data) {
        res.status(400).json({ message: 'Already have the tech added' });
        return;
      } else if (!data) {
        UserTechnology.create({
          techid: techData.id,
          userid: req.session.user_id,
          name: techData.techname,
        });
      }
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//PUT//http://localhost:3001/api/users/mytech
router.put('/avatar', async (req, res) => {
    User.update ({
      avatar: req.body.avatar,
    },
    {
      where: {
        id: req.session.user_id
      }
    })
  .then(dbAvatarData => {
      if (!dbAvatarData[0]) {
        res.status(404).json({ message: 'No firstname found..' });
        return;
      }
      res.json(dbAvatarData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//PUT//http://localhost:3001/api/users/star-user
router.put('/star-user', async (req, res) => {
  try {
    console.log(req.session.star)
    if (req.session.star === false) {
      req.session.star = true;
      const dbUserData = User.increment({stars: 1}, { where: { id: req.body.userid } })
        res.status(200).json(dbUserData);
    } else {
      res.status(429).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




//POST//http://localhost:3001/api/users/logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
      req.session.destroy(() => {
      res.status(204).end();
      });
  } else {
      res.status(404).end();
  }
});


//Exports............................................
module.exports = router;
  