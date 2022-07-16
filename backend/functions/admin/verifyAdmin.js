import express from "express";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelAddUser from "../../models/addUserModel.js";
const router = express.Router();

await connectDB();

const addUserModel = modelAddUser;

router.get("/verifyAdmin", (req, res) => {
  const params = req.query;
  const userId = params["userId"];
  let userDetails
  const userResponse = async () => {
    try {
      userDetails = await addUserModel.find({
        userId: userId,
      });
      console.log(userDetails)
    } catch (err) {
      res.send(false);
    }
  };
  const verifyA = async () => {
    await userResponse();

    try {
    const userRole = userDetails[0]["userRole"];
      if (userRole == "admin") {
        res.send(true);
      } else {
        res.send(false);
      }
    } catch (err) {
      res.send(false);
    }
  };
  verifyA();
});
export default router;
