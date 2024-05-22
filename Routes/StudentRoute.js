const express = require("express");
const router = express.Router();
const Student = require("../model/Student");

router.get("/section", async (req, res) => {
  const { section, group, uid } = req.headers;

  try {
    if (section && group) {
        const sec =section.toUpperCase();
        const grp =group.toUpperCase();
        console.log(sec);
      const student =await Student.find({ section:sec, group: grp});
      res.status(200).json({ student });

    } else if (section && !group) {
        const sec =section.toUpperCase();
      const student = await Student.find({ section:sec });
      res.status(200).json({ student });
    } else if (uid && !group && !section) {
        const idd =uid.toUpperCase();
      const student =await Student.findOne({ uid:idd });
      res.status(200).json({ student });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "internal server error" });
  }

});
router.get("/all", async(req,res)=>{
    try {
        const student= await Student.find()
        res.status(200).json({ student });
    } catch (error) {
      console.log(error);  
      res.status(500).json({ msg: "internal server error" });
    }
})
module.exports = router;
