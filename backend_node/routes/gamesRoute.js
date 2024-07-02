const express = require('express'),
router=express.Router(),
game=require("../controllers/games/game");

router.get("/",game.getGame);

module.exports=router;