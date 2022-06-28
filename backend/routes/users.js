const router = require('express').Router();
let workspaceUser = require('../models/workspaceUser.model')
let {User,validate,validateLogin} = require('../models/user.model')
let bcrypt = require('bcrypt')
const Token = require("../models/NewUserToken")
const sendVerificationEmail = require("./sendVerificationMail")
const crypto = require('crypto')
const Joi = require("joi")
router.route('/').get((req,res)=>{
    WorkspaceUser.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error'+err))
});

router.route('api/v1/auth/register/').post(async(req,res)=>{
        try{
            const{ error } = validate(req.body);
            if(error) return res.status(400).send({message:error.details[0].message});
            const user = await User.findOne({email:req.body.email});
            if(user){
            return res.status(409).send({message:"User with given email already exists"})
            }
        else{
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const hashPassword = await bcrypt.hash(req.body.password,salt);

            await new User({...req.body,password:hashPassword}).save();
            res.status(201).send({message:"User Created successfully"});}

    }catch(error){
   res.status(500).send({message:"Internal Server Error"})
           
    }
})

router.route('api/v1/auth/login').post(async(req,res)=>{

    try{
        const {error} =validateLogin(req.body);
        if(error) return res.status(400).send({message:error.details[0].message});
        const user = await User.find0ne({ email: req.body.email });
        if(!user)
            return res.status(401).send({message:"Invalid Email or Password"});
        const validPassword = await bcrypt.compare(
            req.body.password,user.password
        );
        if(!validPassword){
            return res.status(400).send({message:"Invalid Email or Password"})
        }
        const token = user.generateAuthToken();
        res.status(200).send({data:token,message:"Logged in successfully"})
    }catch(err){
        res.status(500).send({message:"Internal Server Error"})
    }
})
router.route('api/v1/users/add').post((req,res)=>{
    const userName = req.body.userName;
    const userId = req.body.userId;
    const userRole =req.body.userRole;
     const newUser = new workspaceUser({userName,userId,userRole});
     newUser.save()
     .then(()=>res.json('User added'))
     .catch(err=>res.status(400).json('Error:'+err))

});

router.route('api/v1/users/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.route('api/v1/findUser/:id').get((req,res)=>{
    workspaceUser.findByIdAndDelete(req.params.id)
    .then(user=>res.json("User Deleted"))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.route('api/v1/users/update/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user=>{
        user.name = req.body.userName,
        user.role = req.body.userRole,
        exercise.save()
        .then(()=>res.json('User Details Updated'))
        .then((err => res.status(400).json('Error:'+err)));
    })
    .catch(err=>res.status(400).json('Error:'+err));
});
module.exports =router;
