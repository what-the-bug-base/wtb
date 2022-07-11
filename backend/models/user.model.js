const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { schema } = require("./workspaceUser.model");
const userSchema = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    regNo:{type:String,required:true},
    email:{type:String,required:true},
    password:{type: String,required:true},
    verified:{type:Boolean,default:false},
    
    
});
userSchema.methods.generateAuthToken = function(){
 const token = jwt.sign({_id:this._id},process.env.PRIVATEKEY,{expiresIn:"1d"})
 return token
};
const User = mongoose.model("user",userSchema)

const validate = (data)=>{
    const schemaregister = Joi.object({
        firstname:Joi.string().required().label("firstname"),
        lastname:Joi.string().required().label("lastname"),
        email:Joi.string().email().required().label("email"),
        regno:Joi.string().required().label("regno"),
        password:passwordComplexity().required().label("password")

    });
    return schemaregister.validate(data)
}
const validateLogin = (data)=>{
    const schemalogin = Joi.object({
        email:Joi.string().required().label("email"),
        password:Joi.string().min(8).required().label("password")
    });
    return schemalogin.validate(data)
}

exports.validate = validate

exports.validateLogin = validateLogin
module.exports = User;
