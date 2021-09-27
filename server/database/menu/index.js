import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  menus: [{
    name:{type:String,required:true},
    items:[
      {
        type:monoose.Type.ObjectId,
        ref:"Foods"
      }
    ]
  }],
  recommended:[
    {
      type:monoose.Type.ObjectId,
      ref:"Foods",
      unique:true
    }
  ],
  {
    timeStamps:true
  }

});
export const MenuModel = mongoose.model("Menus",MenuSchema);
