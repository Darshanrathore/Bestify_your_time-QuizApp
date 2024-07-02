const db=require('../../databaseConfig');
// const validations=require('../validations/helpersFunction');

//Get all quiz whose status are live
getCategoryQuiz=(req, res) => {
    const catId = req.params.catId;
    // validations.validateCategory(catId)
    //   .then((message) => {
        const sqlMassInsert = `select * from quiz where catId=(?)`;
        db.query(sqlMassInsert, [catId], (err, result) => {
          if (err) {
            res.send({ error: err });
          }
          if (result.length > 0) {
            res.send({ data: result, message: "success" });
          } else {
            res.send({ data: [], message: "No Quiz found under this category" });
          }
        });
    //   })
    //   .catch((err) => {
    //     res.send({ error: err });
    //   });
  }

//Posting new quiz in database
postCategoryQuiz=(req, res) => {
    const catId = req.params.catId;
    const quizName = req.body.quizName;
    const difficulty = req.body.difficulty;
    var time = req.body.time;
    if (time == undefined) {
      time = 0;
    }
    // validations.validateCategory(catId)
    //   .then((message) => {
        const sqlInsert =
          "insert into quiz(catId,quizName,difficulty ,time) values(?,?,?,?);";
        db.query(sqlInsert, [catId, quizName, difficulty, time], (err, result) => {
          if (err) {
            if (err.code.includes("ER_DUP_ENTRY") && err.sqlMessage.includes("quizName")) {
              res.send({ error: "Quiz name already taken" });
            } else {
              res.send({ error: err });
            }
          } else {
            res.send({ message: "Quiz added successfully", qid: result });
          }
        });
      // })
      // .catch((err) => {
      //   res.send({ error: err });
      // });
  }



pathCategoryQuiz=(req, res) => {
    const catId = req.params.catId;
    const qid = req.params.qid;
    var keysArr = Object.keys(req.body);
    var valuesArr = Object.values(req.body);
    var dynamicStr = "";
    keysArr.forEach((item, index) => {
      if (index == 0) {
        dynamicStr += `${item}=(?)`;
      } else {
        dynamicStr += `,${item}=(?)`; //adding , in front of item
      }
    });
    valuesArr.push(qid); //adding qid
    validations.validateCategoryAndQuiz(catId, qid)
      .then((message) => {
        validations.liveQuiz(qid)
          .then((msg) => {
            const sqlUpdate = "update quiz set " + dynamicStr + " where qid=(?);";
            db.query(sqlUpdate, valuesArr, (err, result) => {
              if (err) {
                res.send({ error: err });
              } else {
                res.send({ message: "updated successfully" });
              }
            });
          })
          .catch((err) => {
            res.send({ error: err });
          });
      })
      .catch((err) => {
        res.send({ error: err });
      });
  }

deleteCategoryQuiz=(req, res) => {
    const catId = req.params.catId;
    const qid = req.params.qid;
    // validations.validateCategoryAndQuiz(catId, qid)
    //   .then((message) => {
        // validations.liveQuiz(qid)
        //   .then((msg) => {
            const sqlUpdate = "delete from quiz where qid=(?);";
            db.query(sqlUpdate, [qid], (err, result) => {
              if (err) {
                res.send({ error: err });
              } else {
                res.send({ message: "deleted successfully" });
              }
            // });
          })
        //   .catch((err) => {
        //     res.send({ error: err });
        //   });
        //})
    //   .catch((err) => {
    //     res.send({ error: err });
    //   });
  }




module.exports = {getCategoryQuiz,postCategoryQuiz,pathCategoryQuiz,deleteCategoryQuiz};
