import mongoose from 'mongoose'

const credentialSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String
})

export default mongoose.model("credential",credentialSchema)
