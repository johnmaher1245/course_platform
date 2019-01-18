const passport = require('passport');

//get the passport strategy specifically for google | the google api needed for this is google+ api
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
//get keys file
const keys = require('./../config/keys');
//get the User model
const User = mongoose.model('users');

//user is the user object defined in done of passport.use below
passport.serializeUser((user, done) => {

    done(null, user.id);

});

//id is the user.id that was passed into serializeUser's done function
passport.deserializeUser((id, done) => {

    User.findById(id)
        .then((user) => {
            done(null, user);
        });

});

//tell passport to use the google strategy | new google strategy creates a new instance of GoogleStrategy
passport.use( new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true // helps with http / https on heroku servers
}, async (accessToken, refreshToken, profile, done) => {

    const familyName = profile.name.familyName;
    const givenName = profile.name.givenName;
    const picture = profile.photos[0].value;
    const googleId = profile.id;

    //what happens when a user is directed back with a token
    //find a user if they exists
    const existingUser = await User.findOne({ googleId });

    //user exists with given google id
    if (existingUser) {

        

        //update user if they exists
        const updatedUser = await User.findOneAndUpdate({
            _id: existingUser._id,
        }, {
        $set: { 
            googleId: googleId,
            givenName: givenName,
            familyName: familyName,
            picture: picture
        }
        }, {
            new: true
        })

        return done(null, updatedUser);

    } 

    //no user exists create them here
    const user = await new User({ 
        googleId: googleId,
        givenName: givenName,
        familyName: familyName,
        picture: picture 
    }) .save()

    
    done(null, user);

}));

//allow passport to use facebook
passport.use(new FacebookStrategy({
    profileFields: ['id', 'name', 'photos'],
    clientID: keys.facebookAppId,
    clientSecret: keys.facebookAppSecret,
    callbackURL: "/auth/facebook/callback",
    proxy: true // helps with http / https on heroku servers
}, async (accessToken, refreshToken, profile, done) => {

    const familyName = profile.name.familyName;
    const givenName = profile.name.givenName;
    const picture = profile.photos[0].value;
    const facebookId = profile.id;

    const existingUser = await User.findOne({ facebookId });

    //user exists with given google id
    if (existingUser) {

        //update user if they exists
        const updatedUser = await User.findOneAndUpdate({
            _id: existingUser._id,
        }, {
        $set: { 
            facebookId: facebookId,
            givenName: givenName,
            familyName: familyName,
            picture: picture
        }
        }, {
            new: true
        })

        return done(null, updatedUser);

    } 

    //no user exists create them here
    const user = await new User({ 
        facebookId: facebookId,
        givenName: givenName,
        familyName: familyName,
        picture: picture
    }) .save()
    
    done(null, user);

}));