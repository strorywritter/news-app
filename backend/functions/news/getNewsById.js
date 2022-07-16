import express from "express";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelAddnews from "../../models/addNewsModel.js";
const router = express.Router();

await connectDB();

router.get("/getNewsById", (req, res) => {
  const params = req.query
  const newsId =params['newsId']
  const resp = modelAddnews.find({ newsId: newsId},function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
export default router;