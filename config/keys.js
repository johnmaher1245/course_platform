if(process.env.NODE_ENV === 'production') {
    //in production | require prod keys
    module.exports = require('./prod');
} else {
    //in development mode | require dev keys
    module.exports = require('./dev');
}

