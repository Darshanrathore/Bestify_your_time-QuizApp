const db = require("../../databaseConfig");
//const validations = require("../validations/helpersFunction");

//get Question of a quiz in a category
getQuestion=(req, res) => {
    const catId = req.params.catId;
    const qid = req.params.qid;
  
    //validations.validateCategoryAndQuiz(catId, qid)
     // .then((message) => {
        const sqlMassInsert = `select quesId,qid,quesTitle,options,answer,marks from questions natural join quiz where qid=(?) and catId=(?)`;
        db.query(sqlMassInsert, [qid, catId], (err, result) => {
          if (err) {
            res.send({ error: err });
          }
          if (result.length > 0) {
            result.forEach((item) => {
              item.options = JSON.parse(item.options);
            });
            res.send({ data: result });
          } else {
            res.send({ data: [], message: "No questions found in this quiz" });
          }
        });
     // })
    //   .catch((err) => {
    //     res.send({ error: err });
    //   });
  }

  //post Question of a quiz in a category
  postQuestion=(req, res) => {
    const catId = req.params.catId; //category id
    const qid = req.params.qid; //quiz id
    const quesTitle = req.body.quesTitle.trim();
    const options = req.body.options; //array
    const strOptions = JSON.stringify(options); //converted options arry to string
    var answer = req.body.answer; // int
    var marks = req.body.marks; //int
  
    //JSON.stroptions
    if (answer == undefined) {
      answer = -1; //-1 denotes no answer for this ques can be a descriptive ques
    }
    if (marks == undefined) {
      marks = 0; //can decalare
    }
    //validations.validateCategoryAndQuiz(catId, qid)
     // .then((message) => {
       
            const sqlInsert =
              "insert into questions(qid,quesTitle,options,answer,marks) values(?,?,?,?,?);";
            db.query(
              sqlInsert,
              [qid, quesTitle, strOptions, answer, marks],
              (err, result) => {
                if (err) {
                  res.send({ error2: err });
                } else {
                  res.send({ message: "Question added successfully" });
                }
              }
            );
    //       })
    //       .catch((err) => {
    //         res.send({ error: err });
    //       });
    //   })
    //   .catch((err) => {
    //     res.send({ error: err });
    //   });
  }

  //patch Question of a quiz in a category
  patchquestion=(req, res) => {
    const catId = req.params.catId;
    const qid = req.params.qid;
    const quesId = req.params.quesId;
  
    var keysArr = Object.keys(req.body);
    var valuesArr = Object.values(req.body);
  
    if(keysArr.includes('options'))
    {
      var optionsIndex =keysArr.indexOf('options');
      var arrValues=JSON.stringify(valuesArr[optionsIndex]);
      valuesArr[optionsIndex]=arrValues;
    }
  
    var dynamicStr = "";
  
    keysArr.forEach((item, index) => {
      
    if (index == 0) {
        dynamicStr += `${item}=(?)`;
      } 
    else {
        dynamicStr += `,${item}=(?)`; //adding , in front of item
      }
    });
  
    valuesArr.push(quesId); //adding quesId
  
    validations.validateCategoryAndQuiz(catId, qid)
      .then((message) => {
        validations.liveQuiz(qid)
          .then((msg) => {
            const sqlUpdate =
              "update questions set " + dynamicStr + " where quesId=(?);";
            db.query(sqlUpdate, valuesArr, (err, result) => {
              if (err) {
                res.send({ error: err });
              } else {
                res.send({ message: " updated successfully" });
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

//delete Question of a quiz in a category
  deleteQuestion= (req, res) => {
    const catId = req.params.catId; //category id
    const qid = req.params.qid; //quiz id
    const quesId = req.params.quesId; //question ID
  
  
    validations.validateCategoryAndQuiz(catId, qid)
      .then((message) => {
        validations.liveQuiz(qid)
          .then((msg) => {
            const sqlInsert = "delete from questions where quesId=(?);";
            db.query(sqlInsert, [quesId], (err, result) => {
              if (err) {
                res.send({ error: err });
              } else {
                res.send({ message: " ques deleted successfully" });
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


module.exports = {getQuestion,postQuestion,patchquestion,deleteQuestion};
