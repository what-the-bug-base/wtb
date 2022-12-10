const mongoose = require('mongoose');

const studentSchema = new  mongoose.Schema({
class:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "class"
               },
  
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
               }},{
                timestamps:true
})
const Student = mongoose.model('Student',studentSchema)
module.exports = Student;
