const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');


module.exports = app => {


    app.get('/db/information/collections', (req, res)  => {

        const currentCollection = []

        //get all collection models
        Object.keys(mongoose.connection.models).forEach((collection) => {
            currentCollection.push(collection);

        });

        res.send(JSON.stringify(currentCollection));

    });



    app.get('/db/users/clear', (req, res)  => {
        mongoose.connection.db.dropCollection('users', function(err, result) {
            if(err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });

    app.get('/db/users/list', async (req, res, next) => {

        try {
            const users = await  User.find({});

            toSend = {
                success: 'true',
                message: '',
                data: users
            };

        } catch (e) {
            toSend = {
                success: 'false',
                message: e,
                data: [],
            };
        }

        res.send(JSON.stringify(toSend));

    });

    app.get('/db/users/seed', async (req, res, next) => {

        try {

            var usersToInsert = [{
                givenName: 'John',
                familyName: 'Maher',
                picture: 'test picture',
            }, {
                givenName: 'Jeffrey',
                familyName: 'VanGrow',
                picture: 'test picture',
            }, {
                givenName: 'Nick',
                familyName: 'Scott',
                picture: 'test picture',
            }, {
                givenName: 'Michael',
                familyName: 'Gustin',
                picture: 'test picture',
            }, {
                givenName: 'Dave',
                familyName: 'Smith',
                picture: 'test picture',
            }];

            const x = await User.insertMany(usersToInsert);
               
            toSend = {
                success: 'true',
                message: x,
                data: [],
            };

        } catch (e) {

            console.log(e);
            
            toSend = {
                success: 'false',
                message: e,
                data: [],
            };
        }

        res.send(JSON.stringify(toSend));

    })
}