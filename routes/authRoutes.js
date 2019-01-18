const passport = require('passport');

module.exports = (app) => {

    //send for authentication
    app.get('/auth/google', passport.authenticate('google', {
        
        scope: ['profile', 'email']
    }))
    
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/boost');
    });

    app.get('/api/logout', (req, res) => {
        //logout a user
        req.logout();
        res.redirect('/social-auth');
    });

    app.get('/api/current_user', (req, res) => {
        
        console.log(req.user);
        
        res.send(req.user);
    });
    


    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook/callback',  passport.authenticate('facebook', {
         failureRedirect: '/login' 
        }), function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/boost');
    });
    


};

