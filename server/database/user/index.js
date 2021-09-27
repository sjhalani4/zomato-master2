import mongoose from "mongoose";

const UserSchema =new mongoose.Schema(
  {
     fullname: {type:String, required:true},
     email: {type:String, required:true},
     password:{type:String},
     //address:- It is an array of object
     address:[{detail:{type:String} ,for:{type:String}}],
     phoneNumber:[{type:Number}]
   },
{
       timeStamps:true,
  }
);


export const UserModel = mongoose.model("Users",UserSchema);
