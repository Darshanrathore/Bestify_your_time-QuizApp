const db = require("../../databaseConfig");
 
getUserCount = (req, res) => {
  
  const role = "user";
 
  const sqlInsert = `select count(*) as userCount from users where role=(?);`;
 
  db.query(sqlInsert, [role], (err, result) => {
    if (err) {
      res.send({ error: err });
    }
    if (result.length > 0) {
      //result is an array
      res.send({ data: result });
    } else {
      res.send({ message: "invalid request" });
    }
  });
};
 
module.exports = {getUserCount};