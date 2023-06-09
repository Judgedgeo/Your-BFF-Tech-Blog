const express = require('express');
const expresshbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');


const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');

// helpers
const helpers = require();
const hbs = exphbs.create({ helpers });

//  Express App
const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: process.env.COOKIE,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

//  server begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log('Server listening on: http://localhost:' + PORT);
    });
});

