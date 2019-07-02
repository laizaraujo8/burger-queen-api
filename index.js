const express = require('express');
const app = express();
const db = require('./models/index');

app.listen(4566, console.log("rodando"));

app.use("/users", require("./routes/user"))

db.sequelize.sync();



// const express = require('express');

// const app = express();

// app.get("/", (req, resp) => {
//     resp.send("legal");
// });

// app.get("/users", (req, resp) => {
//     resp.send(
//     [
//         {id: 1, name:"Laura"},
//         {id: 2, name:"Maura"},
//         {id: 3, name:"Cibele"},
//         {id: 3, name:"Cibele"}
//     ]
//     );
// });

// app.listen(3002, () =>{
//     console.log ("começou!!")
// });


