import express from "express";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelAddHeadlines from "../../models/addHeadlineModel.js";
const router = express.Router();

await connectDB();

router.get("/getHeadlineById", (req, res) => {
  const params = req.query
  const headlineId =params['headlineId']
  const resp = modelAddHeadlines.find({ headlineId: headlineId},function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
export default router;