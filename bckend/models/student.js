const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        //required: true,
    },
    class: {
        type: String,
        //required: true,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    marks: {
        type: Number,
    }
})


studentSchema.virtual('id').get(function () { 
    return this._id.toHexString();                         //convert _id to id
});

studentSchema.set('toJSON', {
    virtuals: true,
});

exports.Student = mongoose.model('Student', studentSchema);
