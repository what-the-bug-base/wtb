const router = require('express').Router();
const User = require('../models/user.model')
const Workspace = require('../models/workspace.model');
let authtoken  = require('../middleware/authenticateToken');
//Lists all workspaces in Database "Admin"
router.route('/').get((req,res)=>{
    Workspaces.find()
    .then(workspaces=>res.json(workspaces))
    .catch(err=>res.status(400).json('Error'+err))
});
 
//List everything on workspace
router.get('/api/v1/ws/:id',authtoken,async(req,res)=>{
   try{
    const workspaceURL = req.params.id;
    const workspace = await Workspace.findOne({workspaceUrl:workspaceURL})
    if(!workspace)  return res.status(404).send({message:"Workspace does not exist"});
    if(workspace.user.toString()!==req.user._id.toString()) return res.status(403).send({message:'Forbidden'})
    res.status(201).send({data:workspace,message:"Workspace data sent"})




   }catch(err){
    res.status(500).send({message:"Internal Server Error"})

   }





});

router.route('api/v1/ws/sendInvite/:id').post( (req,res)=>{
   const createInvite = function(invite){
       return Invite.create(invite).then(doc=>{
           return doc
       })
   }
   const addInviteToWorkspace = function(workspaceId,invite){
       return Workspaces.findOneAndUpdate({workspaceId:workspaceId},
        {$push:{invites:invite._id}},
        {new:true,useFindAndModify:false})
   }
   const addInviteToUser = function(userId,invite){
       return User.findOneAndUpdate({userId:userId},
        {$push:{invites:invite._id}},
        {new: true,useFindAndModify:false})
   }
   const addUsertoInvite = function(inviteId,user){
    return Invite.findByIdAndUpdate(
        inviteId,
        {$push:{ users:user._id}},
        { new: true, useFindAndModify: false }
    )
}
   const addWorkspacetoInvite = function(inviteId,workspace){
       return Invite.findByIdAndUpdate(
           inviteId,
           {$push:{ workspaces:workspace._id}},
           { new: true, useFindAndModify: false }
       )
   }
   const run = async function(){
       const work_space = []
  
       const inviteX = await createInvite({
           email: req.body.email
        })
        console.log(inviteX)
        const workspaceId = req.params.id
        const userId = req.body.userId
        const workspaceRes = await addInviteToWorkspace(workspaceId,inviteX)
        const workspace =  Workspaces.findOne({workspaceId:workspaceId})
        .then((workspace)=>{
   
            const inviteRes = addWorkspacetoInvite(inviteX._id,workspace)
            

        })
        .catch((err)=>{
            console.log("An Error Occured "+err)
        })
        const user = User.find({userId:userId}).
        then((user)=>{
            return user 
        })
        .catch((err)=>{
            console.log(err)
        })
        console.log(work_space)
     
        const userRes = await addInviteToUser(req.body.userId,inviteX)
        console.log(userRes)
        const inviteRes2 = await addUsertoInvite(inviteX._id,user)
        console.log(inviteRes2)
   }
   run()

})

//joining members by URl
/*router.router('api/v1/ws/joinedusers/:id').post((req,res)=>{
    Workspaces.find({workspaceId:req.params.id})
    .then((workspace))
})
*/

module.exports =router;
