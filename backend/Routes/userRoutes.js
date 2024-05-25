const express=require('express');
const router=express.Router();
const users=require('../Model/user');
router.use(express.json());
router.post('/add',async(req,res)=>{
    try {
        const data=req.body;
     let newUser = await users(data).save();
     console.log(newUser);
     res.status(200).send({message:"data added"})
        
    } catch (error) {
        console.log(error);
    }
})

module.exports=router