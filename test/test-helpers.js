const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
before((done) => {
    mongoose.connect('mongodb://localhost/test');
    mongoose.connection
    .once('open', () => done())
    .on('error', error => console.log('Error connecting to test database:', error));
});

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
})

after(() => {
    mongoose.connection.close();
});
