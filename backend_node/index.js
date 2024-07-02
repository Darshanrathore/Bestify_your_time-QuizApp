const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./databaseConfig");
const nodemailer = require("nodemailer");


//used to get environment variable from .env file and here it is used to get PORT no.
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

function errorHandler(err, req, res, next) {
  if (err) {
    if (err.type == "entity.parse.failed") {
      res.send({ error: "Object passed in wrong manner. Please correct it" });
    } else {
      res.send({error:"something went wrong. Please Try again"});
      
    }
  }
}

//template when connected to localhost
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("hostPage");
});



// All Base url

app.use("/users",require("./routes/userRoute"));

app.use("/login",require("./routes/loginRoute"));

app.use("/usercount", require("./routes/userCountRoute"));

app.use("/category", require("./routes/categoryRoute"));

app.use("/quiz", require("./routes/quizRoute"));

app.use("/favorite" ,require("./routes/favoriteRoute"));

app.use("/quizdata", require("./routes/quizDataRoute"));

app.use("/game", require("./routes/gamesRoute"));

app.use("/gamedata", require("./routes/gameDataRoute"));


// Mail to user
// app.post("/sendemail", (req, res, next) => {
//   console.log("Request came");

//   let user = req.body;

//   sendMail(user, (info) => {
//     console.log("Mail has been sent");
//     res.send(info);
//   });
//   process.removeEventLister('unhandledRejection', l);
// });

//  function sendMail(user, callback) {
//   var transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       // user: "vikrantbh@cybage.com",
//       // pass: "iker@04Vickyb",
//       user : "vikrantbhujbal9@gmail.com",
//       pass:'9011097845',
//     },
//   });

//   var mailOptions = {

//     from: "vikrantbhujbal9@gmail.com",
//     to: "vikrantbhujbal9@gmail.com",

//     // from: "vikrantbh@cybage.com",
//     // to: "vikrantbh@cybage.com",

//     subject: "Sending email from Node.js",
//     text: `Hi, ${user.name} Your Score for the quiz Indian Culture is 8`,
//   };

//   let info =  transporter.sendMail(mailOptions);

//   callback(info);
// }


//middleware to handle unexpected errors
app.use(errorHandler);

//process.env.variabel_Name is the way to get value from .env
app.listen(process.env.PORT, () =>
  console.log("Running on \n http://localhost:" + process.env.PORT)
);