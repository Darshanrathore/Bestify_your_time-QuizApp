const express = require('express'),
router=express.Router(),
 
users = require("../controllers/users/user");
 
router.get("/", users.getUserCount);
 
module.exports = router;