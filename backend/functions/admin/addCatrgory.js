import express from "express";
import "dotenv/config";

import connectDB from "../../config/db.js";
import modelAddCategory from "../../models/addcategoryModel.js";
const router = express.Router();

await connectDB();

const addCategoryModel = modelAddCategory;

router.get("/addCategory", (req, res) => {
  const params = req.query;
  const newCategory = params["category"];
  let categoryDetails;
  const userResponse = async () => {
    try {
      categoryDetails = await addCategoryModel.find({
        category: newCategory,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const verifyA = async () => {
    await userResponse()
    if (categoryDetails[0]==undefined){
      const categoryData = new addCategoryModel({ category: newCategory });
      categoryData.save()
      res.send(`category ${newCategory} added`);
    }
    else{
      res.send("category already exists");

    }
  };
  verifyA();
});
export default router;
