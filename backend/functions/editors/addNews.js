import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import date from "date-and-time";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelAddnews from "../../models/addNewsModel.js";
import modelAddHeadline from "../../models/addHeadlineModel.js";
import modelAddUser from "../../models/addUserModel.js";
const router = express.Router();

await connectDB();

const now = new Date();
const dateTime = date.format(now, "ddd, MMM DD YYYY");

const addNewsModel = modelAddnews;
const addHeadlineModel = modelAddHeadline;
const addUserModel = modelAddUser;

router.post("/addNews", (req, res) => {
  const bodyData = req.body;
  const newsId = uuidv4();

  const userId = bodyData["userId"];
  let userDetails;
  // const userResponse = async () => {
  //   try {
  //     userDetails = await addUserModel.find({
  //       userId: userId,
  //     });
  //     console.log(userDetails);
  //   } catch (err) {
  //     res.send(false);
  //   }
  // };

  const addThisNews = async () => {
    // await userResponse();

    try {
      // if(userDetails[0]==undefined){
      //   res.send(`user undefined`)
      // }
      // if (userDetails[0]["userRole"] == "editor") {
        const newsData = new addNewsModel({
          newsId: newsId,
          date: dateTime,
          headline: bodyData["headline"],
          news: bodyData["news"],
          category: bodyData["category"],
          topStories: bodyData["topStories"],
        });
        const headlinedata = new addHeadlineModel({
          headline: bodyData["headline"],
          date: dateTime,
          headlineId: newsId,
        });

        newsData.save();
        headlinedata.save();

        res.send(`Headline ${newsId} added`);
      // } else {
      //   res.send(`unathorized user`);
      // }
    } catch (err) {
      res.send(err);
    }
  };
  addThisNews();

  //   const newsData = new addNewsModel({
  //     newsId: newsId,
  //     date: dateTime,
  //     headline: bodyData["headline"],
  //     news: bodyData["news"],
  //     category: bodyData["category"],
  //     topStories: bodyData["topStories"],
  //   });
  //   const headlinedata = new addHeadlineModel({
  //     headline: bodyData["headline"],
  //     date: dateTime,
  //     headlineId: newsId,
  //   });

  //   newsData.save();
  //   headlinedata.save();

  //   res.send(`Headline ${newsId} added`);
});
export default router;
