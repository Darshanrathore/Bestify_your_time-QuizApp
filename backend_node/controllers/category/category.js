const db = require("../../databaseConfig");
 
//get all category
getQuizCategory = (req, res) => {
  const sqlMassInsert = `select * from category order by catId`;
  db.query(sqlMassInsert, (err, result) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send({ data: result });
    }
  });
};
 
module.exports = { getQuizCategory};