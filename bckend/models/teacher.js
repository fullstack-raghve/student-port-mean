const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    name: {
        type: String,
        //required: true,
    },
    education: {
        type: String,
        //required: true,
    },
     email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    subject: {
        type: String,
    }
})


teacherSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

teacherSchema.set('toJSON', {
    virtuals: true,
});

exports.Teacher = mongoose.model('Teacher', teacherSchema);
