//env variable
require ("dotenv").config();
import cors from "cors";
import helmet from "helmet";
import express from "express";

//API
import Auth from "./API/Auth";


//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(cors());
zomato.use(helmet());

//For application routes
//localhost:4000/auth/signup
zomato.use("/auth",Auth);
zomato.get("/", (req,res) => res.json({message: "SetUp Success Yay!!"}));

// zomato.listen(4000, ()=>
// ConnectDB().then(()=>console.log("Server is up and running"))
//  .catch(()=>console.log("DB connection failed")));

zomato.listen(4000, () =>
ConnectDB()
  .then(() => console.log("Server is Running! 😍✨\n"))
   .catch(() => console.log("Server is running, but database connection failed...\n"))
);
