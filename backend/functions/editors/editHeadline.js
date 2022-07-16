import express from "express";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelAddNews from "../../models/addNewsModel.js";
import modelAddUser from "../../models/addUserModel.js";
const router = express.Router();

await connectDB();

const addUserModel = modelAddUser;
const addNewsModel = modelAddNews;

router.post("/editHeadline", (req, res) => {
  const bodyData = req.body;
  const userId = bodyData["userId"];
  const newsId = bodyData["newsId"];
  const newHeadline = bodyData["headLine"];

  const editNews = async () => {
    try {
      const newsResp = await addNewsModel.findOneAndUpdate(
        { newsId: newsId },
        { headline: newHeadline }
      );
    } catch (err) {
      console.log(err);
    }

    res.send(`headline ${newsId} is changed`);
  };
  editNews();
});
export default router;
