import express from "express";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelGetCategories from "../../models/addcategoryModel.js";
const router = express.Router();

await connectDB();

router.get("/getCategories", (req, res) => {
  const resp = modelGetCategories.find({},function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
export default router;