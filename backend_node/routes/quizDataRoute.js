const express = require('express'),
router=express.Router(),


quizData = require("../controllers/quiz_data/quizData")

router.post("/:userId/:qid", quizData.postData);

router.get("/highscore/:qid", quizData.highscore);

router.get("/list/:qid", quizData.optedForQuiz);

router.get("/highscoreindividual/:userId/:qid", quizData.highscoreindividual);


module.exports = router;