const express=require('express');

const register=require('./controllers/auth.controller');
const bookcontroller = require("./controllers/book.controller");

const commentcontroller = require("./controllers/comment.controller");
const usercontroller = require("./controllers/user.controller");

const app = express();

app.use(express.json());

app.use("/books", bookcontroller);
app.use("/comments", commentcontroller);
app.use("/users", userscontroller); 
app.post('/register',register);









module.exports=app;