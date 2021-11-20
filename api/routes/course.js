const Course = require("../models/Course");
const {
  verifyToken,
  verifyTokenAndAuthorization
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newCourse = new Course(req.body);

  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCourse);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
// router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedCourse);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json("Course has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ORDERS OF A PARTICULAR USER
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const courses = await Course.find({ userId: req.params.userId });
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
