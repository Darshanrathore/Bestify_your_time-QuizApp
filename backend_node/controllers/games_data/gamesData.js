const db = require("../../databaseConfig");


postGameData = (req,res) => {

    const userId = req.params.userId;
    const gid = req.params.gid;
    const gscore = req.body.gscore;

    // const userId = 105;
    // const gid = 2;
    // const gscore = 25;

    const status = "complete";

    const sqlInsert = `insert into gamedata(userId,gid,status,gscore) values(?,?,?,?);`;

    db.query(sqlInsert, [userId,gid,status,gscore] , (err,result)=>{

        if (err) {
            res.send({ error: err });
            console.log("Game data not added");
        } else {

            res.send({ message: "Game added to table" });
            
        }
    })
}



highscoreGame = (req,res) => {

  const gid = req.params.gid;

  const sql = 'select users.name, gamedata.gscore from users LEFT JOIN gamedata ON users.userId = gamedata.userId WHERE gamedata.gid = (?) ORDER BY gamedata.gscore DESC LIMIT 1;';

  db.query(sql,[gid], (err,result)=>{

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

// highgscoreindividualGame = (req,res) => {

//   const qid = req.params.qid;
//   const userId = req.params.userId;

//   const sql = 'select users.name, quizdata.gscore from users LEFT JOIN quizdata ON users.userId = quizdata.userId WHERE users.userId=(?) and quizdata.qid = (?)  ORDER BY quizdata.gscore DESC LIMIT 1;';

//   const sql1 = `select gscore from quizdata WHERE qid=(?) and userId=(?) order by gscore DESC LIMIT 1;`;

//   db.query(sql1, [userId,qid], (err,result)=>{

//       if (err) {
//           res.send({ error: err });
//         }
//         if (result.length > 0) {
//           res.send({ data: result });
//         } else {
//           res.send({ data: [], message: "No gscore not found" });
//         }
    
//   })
// }

optedForGame = (req,res) => {

    const gid = req.params.gid;

    // const sql = `select users.name, quizdata.gscore from users LEFT JOIN quizdata ON users.userId = quizdata.userId WHERE quizdata.qid = (?) ORDER BY quizdata.gscore;`;

    const sql1 = `select DISTINCT users.name from users LEFT JOIN gamedata ON users.userId = gamedata.userId WHERE gamedata.gid = (?);`;

    db.query(sql1,[gid], (err,result)=>{

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

module.exports = {postGameData,highscoreGame, optedForGame};