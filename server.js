// Modules...................................................
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const fileUpload = require('express-fileupload');


// Directories...............................................
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// Port......................................................
const app = express();
const PORT = process.env.PORT || 3001;
// app.use(fileUpload());

// Sessions..................................................
const sess = {
  secret: 'Super secret secret',
  cookie: {expires : 10 * 60 * 1000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

app.use(session(sess));

// Handlebars...............................................
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Server...................................................
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, '/public/upload')));

app.use(routes);

// Listener.................................................
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT : ${PORT}`));
});
