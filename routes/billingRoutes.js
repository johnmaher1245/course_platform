const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

const mongoose = require('mongoose');
const User = mongoose.model('users');
// const stripe = require("stripe")("sk_test_fIL6i10JUpGLtqN3Q7xukvdG");



module.exports = app => {

    app.post("/payments/stripe/charge", async (req, res) => {
        try {

          console.log(`made it`);
          
          let {status} = await stripe.charges.create({
            amount: 2000,
            currency: "usd",
            description: "An example charge",
            source: req.body.tokenId
          });

          console.log('status', status);
          console.log('error', status.error);
          

          req.user.activeSubscription = 1;
          const user = await req.user.save();
      
          res.json({
            success: true,
            message: ''
          });
        } catch (err) {
          
          console.log('error message', err.message);
          
          res.send(JSON.stringify({
            success: false,
            message: err.message
          }));
          
        }

      });

    

};