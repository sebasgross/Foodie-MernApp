const express = require('express');
const router  = express.Router();
//models

const Product  =require('../models/Product')
const multer = require("multer");
const uploadCloud = require("../helpers/cloudinary");

let test = {}


//middlewares
//is Authenticated?
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ message: "No te has logueado" });
  }
}
//is LOggedin?
function isLoggedIn(req, res, next) {
  if (req.user) {
      next();
  } else {
      res.redirect('/login');
  }
}

// sculpture
router.post('/product',isAuth,(req,res,next)=>{
  req.body.seller = req.user._id
  req.body.coordinatesFrom = req.user.coordinates
  Product.create(req.body)
  .then(product => {
    test = product._id
    res.status(201).json(product);
  })
  .catch(e => next(e));
});
//add image
router.post('/imageProfile',isAuth,uploadCloud.single('picture'),(req,res,next)=>{

    Product.findByIdAndUpdate(test, {picture: req.file.url})
    .then( product => {
      // console.log(product)
      res.status(200).json({ message: "Product succesfully updated", picture: req.file.url })
    })
    .catch(e => next(e));
  })


module.exports = router
