const {
    Schema,
    model
} = require('mongoose');

const userInfoSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlenght: 2,
        maxlenght: 35
    },
    dept: {
        type: String,
        required: true,
        tirm: true,
        minlenght: 2,
        maxlength: 5
    },
    user_id: {
        type: String,
        required: true,
        tirm: true,
        minlenght: 10,
        maxlength: 10
    },
    addr1: {
        type: String,
        required: true,
        tirm: true,
        minlenght: 10,
        maxlength: 50
    },
    addr2: {
        type: String,
        required: true,
        tirm: true,
        minlenght: 10,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlenght: 9,
        maxlength: 15
    },
});

const AllUsersInfo = model('AllUsersInfo', userInfoSchema);
module.exports = AllUsersInfo;