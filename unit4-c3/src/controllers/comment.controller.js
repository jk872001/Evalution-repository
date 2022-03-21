const express=require('express');
// const{body,validationResults}=require('express-validator');
const Comment=require('../models/book.model');
const router=express.Router();
router.post( "/",async (req, res) => {
    try {
      const item = await Comment.create(req.body);
  
      return res.status(201).send(item);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
});
  
  
  module.exports = router;