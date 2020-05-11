const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const router = express.Router();

router.post('/', async (req,res) => {
    console.log(req.body)
    const{firstName, lastName} = req.body;
    let user ={};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});


// get all the post
router.get('/', async (req, res) => {
    try {
        const userModel = await User.find();
        res.json(userModel);
        console.log(userModel)
    } catch (err) {
        res.json({ message: err });
    }
});

// specific post 
router.get('/:postId', async(req, res) => {
    //console.log(req.params.postId);
    try {
    const userModel = await User.findById(req.params.postId);
         res.json(userModel);
    } catch (err) {
         res.json({ message: err });
    }
 
 });

// delete by id
router.delete("/:id", function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function(err, user) {
     if (err) return next(err);
     res.json(user);
    });
   });

// update a post
router.patch('/:postId', async (req, res) => {
    try {
    const updatedPost = await User.updateOne({ _id: req.params.postId }, {$set: { firstName: req.body.firstName,  lastName: req.body.lastName  }}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }

});





module.exports = router;