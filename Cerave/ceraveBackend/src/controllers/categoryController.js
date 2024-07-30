const Category = require("../models/categoryModel");

//  controller for adding a category
const addCategory = async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  //  check if category already exists
  try {
    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
      return res.status(400).json({ msg: "Category already exists" });
    }
    const category = new Category({
      name,
      description,
    });
    await category.save();
    return res
      .status(201)
      .json({ msg: "Category added successfully", category });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = addCategory;