import express from "express";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelAddUser from "../../models/addUserModel.js";
const router = express.Router();

await connectDB();

const addUserModel = modelAddUser;

router.get("/addEditors", (req, res) => {
  const params = req.query;
  const userId = params["userId"];
  const resp = addUserModel.findOneAndUpdate(
    { userId: userId },
    { userRole: "editor" },
    null,
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Original Doc : ", docs);
      }
    }
  );
  res.send(`user ${userId} is a editor now`)
});
export default router;
