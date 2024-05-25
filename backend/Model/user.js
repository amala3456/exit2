const mongoose=require('mongoose');
const schema=mongoose.Schema({
    Description:String,
    Status:String,

});

const userModel=mongoose.model('data',schema); //user is here collection 
module.exports=userModel;