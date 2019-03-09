const express = require('express');
const router  = express.Router();
const User = require("../models/User");
const Product = require('../models/Product')
const passport = require("passport");
//cloudinary
const multer = require("multer");
const uploadCloud = require("../helpers/cloudinary");



//middlewares
// const isSeller = (req, res, next) => {
//   if (!req.user) return res.redirect('/')
//   if (req.user.chef) return next()
//   return res.redirect('/')
// }
// const isBuyer = (req, res, next) => {
//   if (!req.user) return res.redirect('/login')
//   if (!req.user.chef) return next()
//   return res.redirect('/profile')
// }
//is Authenticated?
function isAuth(req, res, next) {
  console.log(req.isAuthenticated());
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

//signup
router.post("/signup", (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(e => next(e));
});
//sign up Chef
router.post("/chef/signup", (req, res, next) => {
  // console.log("hola")
  User.register(req.body, req.body.password)
    .then(user => {
      // console.log(user)
      res.status(201).json(user);
    })
    .catch(e => next(e));
});
//Editar addreess para user
router.post('/address/user',isAuth,(req,res,next)=>{
  
  User.findByIdAndUpdate(req.user._id, { $set: { ...req.body } }, { new: true })
  // console.log(req.body)
  .then((res)=>{
    res.status(200).json(res)
  })
  .catch((e)=>console.log(e))
})

//logout
router.get("/logout", isAuth, (req, res, next) => {
  req.logout();

  req.session.destroy(err => {
    if (!err) {
      res
        .status(200)
        .clearCookie("connect.sid", { path: "/" })
        .json({ message: "Logout successful" });
    }
    if(!req.user) res.redirect('/login')

  });
});

//login
router.post("/login", passport.authenticate("local",{ failureRedirect: "/login" }), (req, res, next) => {
  res.status(200).json(req.user);
  // res.redirect('/profile')
});

//private profile
router.get('/profile', isAuth,(req,res,next)=>{
  if(!req.user) res.redirect('/login')
  // console.log(req.user._id)
  User.findById(req.user._id)
  .populate('products')
  // Product.find({seller:req.user._id})
  .then((user)=>{
    console.log(user.products)
    res.status(200).json(user)
  })
  .catch(e=>next(e))
})
//profile products
router.get('/profile/products',isAuth,(req,res,next)=>{
    Product.find({seller:req.user._id})
    .then((product)=>{
      res.status(200).json({product})
    })
    .catch((e)=>next(e))
})

// //image
router.get('/image',isAuth,(req,res,next)=>{
  Product.findById(req.user._id)
  then((post)=>{
    res.status(200).json(post)
  })
  .catch((e)=>next(e))
})

//private home
router.get("/home", isAuth, isLoggedIn, (req, res, next) => {
  Product.find({quantity: {$gt: 0}})
  .populate("seller")

  .then((product)=>{
    console.log(product)
    res.status(200).json({product});
  })
  .catch((err)=>next(err))
});

//detail
router.get('/detail/:id', isAuth ,(req,res,next)=>{
  const {id} = req.params
  
  Product.findById(id)
  .then((p)=>{
    res.status(200).json({p, user: req.user})
  })
  .catch((e)=>next(e))
})

router.post('/detail/:id',isAuth ,(req,res,next)=>{
  const {id} = req.params
  // console.log(id)
  
  Product.findByIdAndUpdate(id,{$inc: {quantity: -1 }, active: true, buyer:req.user._id}, {new: true})
  .populate('seller')

  .then((p) => {
   // console.log(p.seller._id)
      User.findByIdAndUpdate(req.user._id, { $push: { products: p._id } }, {new: true})
      .then((x)=>{
      
      res.status(200).json(x)
      User.findByIdAndUpdate(p.seller, { $push: { products: p._id } }, {new: true})
      .then((p)=>{
        res.tatus(200).json(p)
      })
})
.catch(e=>console.log(e))
})
})

router.post('/imageProfile',isAuth, uploadCloud.single('picture'), (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, {profilePic: req.file.url})
    .then( user => {
      res.status(200).json({ message: "Lo lograste! puedes ver, he subido tu foto", profilePic: req.file.url })
    })
    .catch(e => console.log(e))
})
router.get("/private", isAuth, (req, res, next) => {
  res
    .status(200)
    .json({ message: "Access granted: Clearance 1", user: req.user });
});
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
