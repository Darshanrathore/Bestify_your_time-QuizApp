const express = require("express"),
  router = express.Router(),
  log = require("../controllers/users/login");

router.post("/", log.loginUser);

module.exports = router;

