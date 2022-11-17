const mongoose = require('mongoose');

const classSchema = new  mongoose.Schema({
    className:{
        type:String,
        required:true,
    },
    StartTime:{
        type:String,
        required:true,
    },
    Duration:{
        type:String,
        required:true,
    },
    classType:{
        type:Date,
        required:true,
    },
    startDate:{
        type:Date,
        required:true,
    },
    user:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
               }]},{
                timestamps:true
})
const Class = mongoose.model('Class',classSchema)
module.exports = Class;
