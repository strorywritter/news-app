import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({
  newsId:String,
  date:String,
  headline:String,
  news:String,
  category:String,
  topStories:String
})

export default mongoose.model("news",newsSchema)
