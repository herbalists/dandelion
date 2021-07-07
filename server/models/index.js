const mongoose = require('mongoose');
console.log(mongoose.connection.readyState);
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/dandelion', {
    keepAlive: true,
    useMongoClient: true
});

mongoose.connection.on('error', function(err) {
    console.log('error');
});
