import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  userId:String,
  name:String,
  email:String,
  userRole:String
})

export default mongoose.model("users",userSchema)
