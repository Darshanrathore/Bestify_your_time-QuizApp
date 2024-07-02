const db = require("../../databaseConfig");

//get Favorite for a particular user
getUserFavourite = (req, res) => {

  const userId = req.params.userId;

  const sqlMassInsert = `select fid,userId,qid,quizName from favorite natural join quiz where userId=(?) order by fid;`;

  db.query(sqlMassInsert, [userId], (err, result) => {
    if (err) {
      res.send({ error: err });
    }
    if (result.length > 0) {
      res.send({ data: result });
    } else {
      res.send({ data: [], message: "No item in  favlist" });
    }
  });
};


// Add to favorites
postUserFavourite = (req, res) => {

  const userId = req.params.userId; 
  const qid = req.params.qid; 

  const sqlInsert = "insert into favorite(userId,qid) values(?,?);";

  db.query(sqlInsert, [userId, qid], (err, result) => {
    if (err) {
      if (err.code.includes("ER_DUP_ENTRY")) {
        res.send({ message: "Quiz already added in favorite list" });
      } else if (
        err.code.includes("ER_NO_REFERENCED_ROW_2") &&
        err.sqlMessage.includes("qid")
      ) {
        res.send({ message: "Quiz not exists" });
      } else if (
        err.code.includes("ER_NO_REFERENCED_ROW_2") &&
        err.sqlMessage.includes("userId")
      ) {
        res.send({ message: "invalid user" });
      } else {
        res.send({ error: err });
      }
    } else {
      res.send({ message: "Quiz added to favorite list" });
    }
  });
};

//delete from Favorites for a particular user
deleteUserFavourite = (req, res) => {

  const userId = req.params.userId; 
  const qid = req.params.qid; 

  const sqlInsert = "delete from favorite where userId=(?) and qid=(?);";
  
  db.query(sqlInsert, [userId, qid], (err, result) => {
    if (err) {
      res.send({ error: err });
    }
    if (result.affectedRows > 0) {
      res.send({ message: "Quiz removed from favorite" });
    } else {
      res.send({ message: "Quiz cant be removed as it is not in favorite" });
    }
  });
};

module.exports = {getUserFavourite, postUserFavourite, deleteUserFavourite };
