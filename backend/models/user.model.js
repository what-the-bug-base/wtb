const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { schema } = require("./workspaceUser.model");
const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
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
        firstName:Joi.string().require().label("Fist Name"),
        lastName:Joi.string().require().label("Last Name"),
        email:Joi.string.email.require().label("Email"),
        password:passwordComplexity().require.label("Password")

    });
    return schemaregister.validate(data)
}
const validateLogin = (data)=>{
    const schemalogin = Joi.object({
        email:Joi.string().require().label("Email"),
        password:Joi.string().min(8).require().label("Password")
    });
    return schemalogin.validate(data)
}
