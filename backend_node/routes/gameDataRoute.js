const express = require('express'),
router=express.Router(),


gameData = require("../controllers/games_data/gamesData")

router.post("/:userId/:gid", gameData.postGameData);

router.get("/highscore/:gid", gameData.highscoreGame);

router.get("/list/:gid", gameData.optedForGame);

// router.get("/highscoreindividual/:userId/:qid", quizData.highscoreindividual);


module.exports = router;