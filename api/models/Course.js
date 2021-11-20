const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    userId: { 
      type: String, required: true 
    },
    courses: [
      {
        courseId: {
          type: String,
        },
      },
    ],
    totalCourses: { 
      type: Number, required: true 
    },
    status: { 
      type: String, default: "pending" 
    },
  },
  { 
    timestamps: true 
  }
);

module.exports = mongoose.model("Course", CourseSchema);
