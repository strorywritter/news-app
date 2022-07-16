import express from 'express'
import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
// import cors from 'cors'
import 'dotenv/config'

// user functions
import usersRoutes from './functions/user/addUser.js'
import signup from './functions/user/signup.js'

// news functions
import getNewses from './functions/news/getNewses.js'
import getNewsById from './functions/news/getNewsById.js'
import getHeadlines from './functions/news/getHeadlines.js'
import getHeadlineById from './functions/news/getHeadlineById.js'
import getTopStories from './functions/news/getTopStories.js'
import getCategories from './functions/news/getCategories.js'
import getNewsByCategory from './functions/news/getNewsByCategory.js'

// admion functions
import addEditors from './functions/admin/addEditors.js'
import verifyAdmin from './functions/admin/verifyAdmin.js'
import addCategory from './functions/admin/addCatrgory.js'

// editor functions
import addNews from './functions/editors/addNews.js'
import editNews from './functions/editors/editNews.js'
import editHeadline from './functions/editors/editHeadline.js'

const app = express()
const PORT = 5000

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(bodyParser.json())

// add users
app.use('/user/',usersRoutes)

// add news
app.use('/editors',addNews)

// get newses
app.use('/news',getNewses)

// get newsBYId
app.use('/news',getNewsById)

// get headlines
app.use('/news',getHeadlines)

// get headlineById
app.use('/news',getHeadlineById)

// get topStories
app.use('/news',getTopStories)

// get getCategory
app.use('/news',getCategories)

// add editors
app.use('/admin',addEditors)

// add news
app.use('/editors',editNews)

// add news
app.use('/editors',editHeadline)

// add news
app.use('/admin',verifyAdmin)

// add news
app.use('/admin',addCategory)

// add news
app.use('/user',signup)

// add getNewsByCategory
app.use('/news',getNewsByCategory)


app.get('/',(req,res)=>{
    console.log("main page")
    res.send('main page')
})
app.listen(PORT, ()=> console.log(`Server running on port: http://localhost ${PORT}`))