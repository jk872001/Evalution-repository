
const express = require("express")

const router = express.Router();
const authenticate = require("../middlewares/authenticate")
const User = require("../models/user.model")

router.post("", authenticate, async (req, res) => {

    req.body.user_id = req.userID;
    try{
        const user = await User.create(req.body)
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})


module.exports = router;