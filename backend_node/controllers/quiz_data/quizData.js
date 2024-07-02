const db = require("../../databaseConfig");


postData = (req,res) => {

    const userId = req.params.userId;
    const qid = req.params.qid;
    const score = req.body.score;

    const status = "complete";

    const sqlInsert = `insert into quizdata(userId,qid,status,score) values(?,?,?,?);`;

    db.query(sqlInsert, [userId,qid,status,score] , (err,result)=>{

        if (err) {
            res.send({ error: err });
        } else {

            res.send({ message: "Quiz added to favorite list" });
        }
    })
}



highscore = (req,res) => {

  const qid = req.params.qid;

  const sql = 'select users.name, quizdata.score from users LEFT JOIN quizdata ON users.userId = quizdata.userId WHERE quizdata.qid = (?) ORDER BY quizdata.score DESC LIMIT 1;';

  db.query(sql,[qid], (err,result)=>{

      if (err) {
          res.send({ error: err });
        }
        if (result.length > 0) {
          res.send({ data: result });
        } else {
          res.send({ data: [], message: "Data not found" });
        }
    
  })
}

highscoreindividual = (req,res) => {

  const qid = req.params.qid;
  const userId = req.params.userId;

  const sql = 'select users.name, quizdata.score from users LEFT JOIN quizdata ON users.userId = quizdata.userId WHERE users.userId=(?) and quizdata.qid = (?)  ORDER BY quizdata.score DESC LIMIT 1;';

  const sql1 = `select score from quizdata WHERE qid=(?) and userId=(?) order by score DESC LIMIT 1;`;

  db.query(sql1, [userId,qid], (err,result)=>{

      if (err) {
          res.send({ error: err });
        }
        if (result.length > 0) {
          res.send({ data: result });
        } else {
          res.send({ data: [], message: "No Score not found" });
        }
    
  })
}

optedForQuiz = (req,res) => {

    const qid = req.params.qid;

    const sql = `select users.name, quizdata.score from users LEFT JOIN quizdata ON users.userId = quizdata.userId WHERE quizdata.qid = (?) ORDER BY quizdata.score;`;

    const sql1 = `select DISTINCT users.name from users LEFT JOIN quizdata ON users.userId = quizdata.userId WHERE quizdata.qid = (?);`;

    db.query(sql1,[qid], (err,result)=>{

        if (err) {
            res.send({ error: err });
          }
          if (result.length > 0) {
            res.send({ data: result });
          } else {
            res.send({ data: [], message: "Data not found" });
          }
      
    })
}

module.exports = {postData, highscore, highscoreindividual, optedForQuiz};