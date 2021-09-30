import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Router = express.Router();

//Models
import { UserModel } from "../../database/user";

/*
Route         /signup
Descrip        signup with email and password
params         None
Access         Public
Method         POST
*/


Router.post("/signup", async(req,res)=> {
  try {
      await UserModel.findEmailAndPhone(req.body.credentials);

//DB
  const newUser =    await UserModel.create(req.body.credentials);

      //JWT Auth Token (For Security layer)
      const token =newUser.generateJwtToken();

      return res.status(200).json({token});


  } catch(error){
    return res.status(500).json({error:error.message});
  }
});
/*
Route         /signin
Descrip        signin with email and password
params         None
Access         Public
Method         POST
*/


Router.post("/signin", async(req,res)=> {
  try {
    const user =await UserModel.findByEmailAndPassword(req.body.credentials);


      //JWT Auth Token (For Security layer)
      const token =user.generateJwtToken();

      return res.status(200).json({token, status:"Success"});


  } catch(error){
    return res.status(500).json({error:error.message});
  }
});

export default Router;
