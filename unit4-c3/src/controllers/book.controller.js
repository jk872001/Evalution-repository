const express=require('express');
const{body,validationResults}=require('express-validator');
const Book=require('../models/book.model');
const router=express.Router();
router.post(
    "/",
    // body('username').isEmail(),
    body("coverImage")
      .trim()
      .not()
      .isEmpty()
      .bail()
      .withMessage(" cannot be empty")
      .isLength({ max: 1 })
      ,
    
    
     
    async (req, res) => {
      try {
       
        const errors = validationResult(req);
        console.log({ errors });
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
  
        const user = await User.create(req.body);
  
        return res.status(201).send(user);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
    }
  );
  
  module.exports = router;