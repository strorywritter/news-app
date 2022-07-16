import express from 'express'
import 'dotenv/config'
import { v4 as uuidv4 } from 'uuid';

import connectDB from '../../config/db.js'
import modelAddUser from '../../models/addUserModel.js'
import  modelAddCredential from '../../models/addCredentialModel.js'
const router = express.Router()

await connectDB()

const addUserModel = modelAddUser
const addCredentialModel = modelAddCredential

router.post('/addUser',(req,res)=>{
    const bodyData = req.body
    const userId = uuidv4()
    const addUserData = new addUserModel({userId:userId,name:bodyData['name'],email:bodyData['email'],userRole:'user'})
    const addCredentialData = new addCredentialModel({name:bodyData['name'],email:bodyData['email'],password:bodyData['password']})
    addUserData.save()
    addCredentialData.save()
    res.send(`user ${bodyData['name']} added`)
})
export default router