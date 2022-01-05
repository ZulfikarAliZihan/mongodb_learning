const assert =  require('assert');
const User = require('../src/user')
describe('Create Records', () => {
    it('save a user', (done) => {
        const zihan = new User({name: 'Zulfikar'});
        zihan.save().then(() => {
            assert(!zihan.isNew);
            done();
        })
    })
})