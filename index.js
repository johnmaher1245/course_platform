const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
//get config keys
const keys = require('./config/keys');

// get our models
require('./models/User');
require('./models/Survey');
require('./models/Courses');
require('./models/Lessons');

//get our passport file
require('./services/passport');


//connect to mongoose
mongoose.connect(keys.mongoURI, { 
    //used to get by a depreciated mongoose method
    useNewUrlParser: true 
});

//create a new express app
const app = express();

//create the ability to read post, put, patch request onto the req.body object
app.use(bodyParser.json());

app.use(
    cookieSession({
        //set cookie to last 30 days
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

//app.use adds middleware for every route handler
app.use(passport.initialize());
app.use(passport.session());

//call the authentication routes with the app const
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/dbRoutes')(app);
require('./routes/apiRoutes')(app);

// if in production, tell express to go to client side (react)
// of application if it doesnt recognize the 
// request as a node route
if(process.env.NODE_ENV === 'production') {
    // express will serve up production assets
    // like main.js or main.css file
    app.use(express.static('client/build'));

    // express wil serve up the index.html file 
    // if it doesn't recognize route
    // this can also send the 404 page
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

//if we have a process.env variable of PORT use it, if not use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);