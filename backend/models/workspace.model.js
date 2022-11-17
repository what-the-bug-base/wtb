const mongoose = require('mongoose');

const workspaceSchema = new  mongoose.Schema({
    workspaceUrl:{
        type:String,
        unique:true,
        required:true,
    },
    class:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "class"
       }],

    user:[{
              type: mongoose.Schema.Types.ObjectId,
              ref: "User"
             }]},{

    timestamps:true


})
const Workspace = mongoose.model('Workspace',workspaceSchema)
module.exports = Workspace;
