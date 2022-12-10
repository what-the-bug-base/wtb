const mongoose = require('mongoose');

const eventsSchema = new  mongoose.Schema({
    eventName:{
        type:String,
        required:true,
    },
    startdate:{
        type:Date,
        required:true,
    },
    enddate:{
        type:Date,
        required:true,
    },
    disabled:{
        type:Boolean,
        required:false
    },
    color:{
        type:String,
        required:false
    }
    ,
    editable:{
        type:Boolean,
        required:false,
    },
    draggable:{
        type:Boolean,
        required:false,

    }

    


}
    
    ,{
                timestamps:true
})
const Class = mongoose.model('Event',classSchema)
module.exports = Event;
