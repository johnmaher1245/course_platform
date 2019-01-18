/*************************************************************
This file is used to solve errors with development domains
localhost:3000 (the client side)
localhost:5000 (the server side)
*************************************************************/

const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))
    app.use(proxy('/auth/facebook', { target: 'http://localhost:5000' }))
    app.use(proxy('/auth/facebook/callback', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/*', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/lessons', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/courses', { target: 'http://localhost:5000' }))

    app.use(proxy('/payments/stripe/charge', { target: 'http://localhost:5000' }))
    // app.use(proxy('/db/users/*', { target: 'http://localhost:5000' }))
    app.use(proxy('/db/users/*', { target: 'http://localhost:5000' }))
    app.use(proxy('/db/information/*', { target: 'http://localhost:5000' }))
    app.use(proxy('/db/*', { target: 'http://localhost:5000' }))
}