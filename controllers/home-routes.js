//Imports............................................
const router = require("express").Router();

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
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      res.render("home");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});


//Exports............................................
module.exports = router;
