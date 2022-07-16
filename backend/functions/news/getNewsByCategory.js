import express from "express";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelAddnews from "../../models/addNewsModel.js";
const router = express.Router();

await connectDB();

router.get("/getNewsByCategory", (req, res) => {
  const params = req.query
  const categoryName =params['category']
  const resp = modelAddnews.find({ category: categoryName},function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
export default router;