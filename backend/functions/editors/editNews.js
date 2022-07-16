import express from "express";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelAddNews from "../../models/addNewsModel.js";
import modelAddUser from "../../models/addUserModel.js";
const router = express.Router();

await connectDB();

const addUserModel = modelAddUser;
const addNewsModel = modelAddNews;

router.post("/editNews", (req, res) => {
  const bodyData = req.body;
  const newsId = bodyData["newsId"];
  const newNews = bodyData["news"];

  const editNews = async () => {
    try {
      const newsResp = await addNewsModel.findOneAndUpdate(
        { newsId: newsId },
        { news: newNews }
      );
    } catch (err) {
      console.log(err);
    }

    res.send(`news ${newsId} is changed`);
  };
  editNews();
});
export default router;
