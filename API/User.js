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


router.get('/', async (req,res) => {
    console.log(req.body)
    const{firstName, lastName} = req.body;
    let user ={};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

router.delete("/:id", function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function(err, user) {
     if (err) return next(err);
     res.json(user);
    });
   });





module.exports = router;