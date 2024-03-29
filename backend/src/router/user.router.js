const express = require("express");
const Users = require("../models/users.models");
const router = express.router();
const zod = require("zod");
const JWT = require('jsonwebtoken');
const JWT_SECRET = require("../../config");
const { authMiddleware } = require("../Authentication/user.auth");


const signupSchema = zod.object({
    username:zod.string().email(),
    password:zod.string().minLength(6),
    firstName:zod.string(),
    lastName:zod.string()
})

router.post('/signup',async (req,res)=>{
    const body = req.body;
    const {success} =signupSchema.safeParse(body)
    if(!success){
       return  res.status(411).json("Inputs are wrong");
    }

    const user = Users.findOne({
        username:body.username
    })

    if(user._id){
        return  res.status(411).json("User already exists");
    }
    else{
     const dbUser = await Users.create(body);

     const userId = user._id;

     await Account.create({
     userId,
     balance: 1 + Math.random() * 10000
 })


     const token = JWT.sign({
        userID : dbUser._id
     },JWT_SECRET);

     res.json({
        msg:"User created Successfully",
        token:token
     });

    }


   
})


const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await Users.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = JWT.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})


// other auth routes

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await Users.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})


router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const user = await Users.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: user.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports=router;