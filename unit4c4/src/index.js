const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller")
const todoController = require("./controllers/todo.controller")

const {register,login, generateToken} = require("./controllers/auth.controller")
const app = express();



app.use(express.json());


app.use("/users", userController)

app.post("/register", register)

app.post("/login", login)

app.use("/todo", todoController)




app.listen(5000, async () => {
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});