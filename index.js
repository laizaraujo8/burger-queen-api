const express = require('express');
const app = express();
const db = require('./models/index');

app.listen(2021, console.log("rodando"));

app.use("/users", require("./routes/user"))
app.use(express.json());

db.sequelize.sync();
