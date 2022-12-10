const router = require('express').Router();

let {User,validate,validateLogin} = require('../models/user.model')
let bcrypt = require('bcrypt')
const Class = require('../models/class.model')
let authtoken  = require('../middleware/authenticateToken');
const Token = require("../models/NewUserToken")
const sendVerificationEmail = require("./sendVerificationMail")
const crypto = require('crypto')
const Joi = require("joi");
const {v4:uuidv4} = require('uuid')


const Workspace = require('../models/workspace.model');
const workspaceidtag  = uuidv4()




router.route('/api/v1/auth/register').post(async(req,res)=>{
      
    try{
        
        const{ error } = validate(req.body);
        if(error) return res.status(400).send({message:error.details[0].message});

        const user = await User.findOne({email:req.body.email});
        if (user) return res.status(409).send({message:"User with given email already exists"})        
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password,salt);

       const newuser = await new User({...req.body,password:hashPassword}).save();

      
       await new Workspace({workspaceUrl:workspaceidtag,user:newuser._id.toString()}).save();
       res.status(201).send({message:"User Created successfully"});

    }catch(error){
        console.log(error)
        res.status(500).send({message:"Internal Server Error"})
           
    }
})

router.post('/api/v1/class/schedule',authtoken,async(req,res)=>{

    try{
            const {accounttype} = await User.findById(req.user._id)
            if(accountype=="Teacher"){
                const classdets = await Class.findOne({email:req.body.className});
                if (classdets) return res.status(409).send({message:"Class with that name already scheduled"})

                await new Class({...req.body,}).save();
                res.status(201).send({message:"Class Created successfully"});

            }
           
    }
    catch(err){
        console.log(error)
        res.status(500).send({message:"Internal Server Error"})

    }

})

router.get('/api/v1/auth/userdetails',authtoken,async(req,res)=>{
try{
    const {firstname,lastname,email,accounttype,verified} = await User.findById(req.user._id)
   
    res.status(201).send({firstname:firstname,lastname:lastname,email,accounttype:accounttype,verified:verified})
}
catch(err)
{
   res.status(500).send({message:"Internal Server Error"})
}      
})
router.route('/api/v1/auth/login').post(async(req,res)=>{

    try{
      
        const {error} =validateLogin(req.body);
        if(error) return res.status(400).send({message:error.details[0].message});
        const user = await User.findOne({ email: req.body.email })
        if(!user)
            return res.status(401).send({message:"Invalid Email or Password"});
        const validPassword = await bcrypt.compare(
            req.body.password,user.password
        );
        if(!validPassword){
            return res.status(400).send({message:"Invalid Email or Password"})
        }
        const token = user.generateAuthToken();
        const workspace = await Workspace.findOne({user:user._id.toString()})
        const workspaceURL= workspace.workspaceUrl;
        console.log(workspaceURL)

        res.status(200).send({data:token,url:workspaceURL,message:"Logged in successfully"})
    }catch(err){
        console.log(err)
        res.status(500).send({message:"Internal Server Error"})
    }
})
/*
router.route('/api/v1/users/add').post((req,res)=>{
    const userName = req.body.userName;
    const userId = req.body.userId;
    const userRole =req.body.userRole;
     const newUser = new workspaceUser({userName,userId,userRole});
     newUser.save()
     .then(()=>res.json('User added'))
     .catch(err=>res.status(400).json('Error:'+err))

});

router.route('/api/v1/users/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.route('/api/v1/findUser/:id').get((req,res)=>{
    workspaceUser.findByIdAndDelete(req.params.id)
    .then(user=>res.json("User Deleted"))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.route('/api/v1/users/update/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user=>{
        user.name = req.body.userName,
        user.role = req.body.userRole,
        exercise.save()
        .then(()=>res.json('User Details Updated'))
        .then((err => res.status(400).json('Error:'+err)));
    })
    .catch(err=>res.status(400).json('Error:'+err));
});*/
module.exports =router;
