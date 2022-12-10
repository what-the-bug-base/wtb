const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const workspaceSchema = new  mongoose.Schema({
    workspaceUrl:{
        type:String,
        unique:true,
        required:true,
    },
    class:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
       }],
    event:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Event"
    }],
     user:{
              type: ObjectId,
              ref: "User"
             }},{

    timestamps:true


})
const Workspace = mongoose.model('Workspace',workspaceSchema)
module.exports = Workspace;
