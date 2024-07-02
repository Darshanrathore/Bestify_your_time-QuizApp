const db = require("../../databaseConfig");

 
// give favorite quizes field along with other quizes
// getAllQuiz = (req, res) => {
//   const userId = req.params.userId;
//   const sqlMassInsert = `
//     // select q.qid,q.cid,q.quizName,q.time,q.difficulty,q.live,f.qid as favorite from quiz as q left join (select * from favorite where userId=(?)) as f on q.qid=f.qid ;`;
//   db.query(sqlMassInsert, [userId], (err, result) => {
//     if (err) {
//       res.send({ error: err });
//     }
//     if (result.length > 0) {
//       res.send({ data: result, message: "success" });
//     } else {
//       res.send({ data: [], message: "No Quiz found under this category" });
//     }
//   });
// };

getAllQuiz = (req, res) => {
  const userId = req.params.userId;
  const sqlMassInsert = `
    select * from quiz`;
  db.query(sqlMassInsert,  (err, result) => {
    if (err) {
      res.send({ error: err });
    }
    if (result.length > 0) {
      res.send({ data: result, message: "success" });
    } else {
      res.send({ data: [], message: "No Quiz found under this category" });
    }
  });
};
 
getQuizCount = (req, res) => {
  const userId = req.params.userId;
  const sqlMassInsert = `select count(*) as 'quizCount' from quiz`;
  db.query(sqlMassInsert, (err, result) => {
    if (err) {
      res.send({ error: err });
    }
    if (result.length > 0) {
      res.send({ data: result, message: "success" });
    } else {
      res.send({ data: [], message: "No Quiz found under this category" });
    }
  });
};
 
getQuizUnderCategory = (req, res) => {
  const qid = req.params.qid;
  const catId = req.params.catId;
  
      const sqlMassInsert = `select * from quiz where qid=(?)`;
      db.query(sqlMassInsert, [qid], (err, result) => {
        if (err) {
          res.send({ error: err });
        }
        if (result.length > 0) {
          res.send({ data: result });
        } else {
          res.send({ data: [], message: "No Quiz found under this Quiz id" });
        }
      });
    
    // .catch((err) => {
    //   res.send({ error: err });
    // });
};
 
module.exports = { getAllQuiz, getQuizCount, getQuizUnderCategory };