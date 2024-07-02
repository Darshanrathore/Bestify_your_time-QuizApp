const db = require("../../databaseConfig");
 
//get all category
getGame = (req, res) => {
  const sqlMassInsert = `select * from game order by gid`;
  db.query(sqlMassInsert, (err, result) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send({ data: result });
    }
  });
};
 
module.exports = { getGame};