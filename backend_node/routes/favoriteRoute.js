const express = require("express"),
  router = express.Router(),
  favo = require("../controllers/favoriteQuiz/favoriteQuiz");



//get favourite of a user by userId
router.get("/:userId", favo.getUserFavourite); // ::  /favorite/:userId

//post favourite of a user by userId and quiz id
router.post("/:userId/:qid", favo.postUserFavourite); // ::  /favorite/:userId/:qid

//delete favourite of a user by userId and quiz id
router.delete("/:userId/:qid", favo.deleteUserFavourite); // :: /favorite/:userId/:qid



module.exports = router;
