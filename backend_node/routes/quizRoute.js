const express = require("express"),
  router = express.Router(),
  quiz = require("../controllers/quiz/quiz")
 
//get all favorite and non favourite quiz of user
// router.get("/:userId", quiz.getAllQuiz); //it means /quiz/:userId

router.get("/", quiz.getAllQuiz); 
 
//give quiz count

//give quiz count
// router.get("/", quiz.getQuizCount); //it means /quiz

router.get("/count", quiz.getQuizCount);
//get quiz details in a category
router.get("/:catId/:qid", quiz.getQuizUnderCategory); //it means /quiz//:cid/:qid
 
module.exports = router;