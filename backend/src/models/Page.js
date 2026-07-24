const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["header", "paragraph", "list", "table", "equation"],
    required: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  order: {
    type: Number,
    default: 0,
  },
});

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    blocks: [blockSchema],
    content: {
  type: String,
  default: "",
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Page", pageSchema);