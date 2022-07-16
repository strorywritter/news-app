import mongoose from 'mongoose'

const headlineSchema = new mongoose.Schema({
  headline:String,
  date:String,
  headlineId:String
})

export default mongoose.model("headLines",headlineSchema)
