const Category = require("../models/categoryModel");

// Helper function to send error responses
const sendErrorResponse = (res, error) => {
  console.log(error);
  res.status(500).json({ msg: error.message });
};

// Create a new category (Admin Only)
const createCategory = async (req, res) => {
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

    return res.status(201).json({ 
      msg: "Category added successfully", 
      category: category,
      success: true,
     });
  } catch (error) {
    sendErrorResponse(res, error);
    // return res.status(500).json({ msg: error.message });
  }
};


// controller for updating a category (admin only!)
const updateCategory = async (req, res) => {
 
  try {
    const { name, description } = req.body;
    let updateData = {name, description};

    const category = await Category.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }
    if (!name) {
      category.description = description;
    } else if (!description) {
      category.name = name;
    } else {
      category.name = name;
      category.description = description;
    }
    return res.status(200).json({
      msg: "Category updated successfully",
      category: category,
      success: true ,
    });
  } catch (error) {
    // return res.status(500).json({ msg: error.message });
    sendErrorResponse(res, error);

  }
};

module.exports = {createCategory, updateCategory};