const express = require("express");
const router = express.Router();

const protectRoute = require("../middleware/authMiddleware");

const {
  createPage,
  getAllPages,
  getSinglePage,
   updatePage,
   deletePage,
} = require("../controllers/pageController");

// Get All Pages
router.get("/", getAllPages);

router.get("/:id", getSinglePage);


// Create New Page (Protected)
router.post("/", protectRoute, createPage);

router.put("/:id", protectRoute, updatePage);

router.delete("/:id", protectRoute, deletePage);

module.exports = router;