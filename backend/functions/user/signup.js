import express from "express";
import "dotenv/config";
import firebaseAuth from '../../config/firebaseAuth.js'
const router = express.Router();

router.post("/signup", async (req, res) => {
  const bodyData = req.body;
  if (!bodyData['email'] || !bodyData['password']){
    return res.status(422).json({
      email:"email is required",
      password: "password required"
    })
  }
  firebaseAuth
    .auth()
    .createUserWithEmailAndPassword(bodyData['email'],bodyData['password'])
    .then((data) => {
      return res.status(201).json(data)
    })
    .catch(function (error){
      let errorCode = error.Code
      let errorMessage = error.message
      if (errorCode == 'auth/weak-password'){
        return res.status(500).json({error:errorMessage})
      }
      else{
        return res.status(500).json({error:errorMessage})
      }
    })

});
export default router;
