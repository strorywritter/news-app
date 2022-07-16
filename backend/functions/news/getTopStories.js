import express from "express";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelAddnews from "../../models/addNewsModel.js";
const router = express.Router();

await connectDB();

router.get("/getTopStories", (req, res) => {
  // const bodyData = req.body
  const resp = modelAddnews.find({ topStories: 'true'},function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
export default router;