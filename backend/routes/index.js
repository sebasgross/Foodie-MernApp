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
router.get('/address/user'), isAuth,(req,res,next)=>{
  User.findById(req.user._id)
  .then((user)=>{
    res.status(200).json(user)
  })
  .catch((e)=>next(e))
}
router.post('/address/user',isAuth,(req,res,next)=>{
 


  User.findByIdAndUpdate(req.user._id, req.body, { new: true })
  // console.log(req.body.user)

  .then((user)=>{
    // console.log(user)
    res.status(200).json(user)
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
  
    res.status(200).json(user)
  })
  .catch(e=>next(e))
})
//profile products
router.get('/profile/products',isAuth,(req,res,next)=>{
    Product.find({seller:req.user._id, delivered:false})
    
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

//filtro product
router.get('/home/filter',isAuth,(req,res,next)=>{
  const {search} = req.query 
  Product.find({
    
    $or:[
      {name: {$regex:search,$options:'i'}},
      {type:  {$regex:search,$options:'i'}},
      {cuisine:  {$regex:search,$options:'i'}},
      {ingredients:  {$regex:search,$options:'i'}},
    ],quantity: {$gt: 0},bought:false

  })
  .populate("seller")
  .then((result)=>{
    // console.log(res)
    res.status(200).json(result)
  })
  .catch((e)=>{
    console.log(e)
    res.json(e)
  })
})

//private home
router.get("/home", isAuth, isLoggedIn, (req, res, next) => {
  Product.find({quantity: {$gt: 0},bought:false})
  .populate("seller")

  .then((product)=>{
    
    res.status(200).json({product});
  })
  .catch((err)=>next(err))
});

//detail
router.get('/detail/:id', isAuth ,(req,res,next)=>{
  const {id} = req.params
  
  Product.findById(id)
  .populate("buyer")
  .then((p)=>{
    res.status(200).json({p, user: req.user})
  })
  .catch((e)=>next(e))
})

router.post('/detail/:id',isAuth ,(req,res,next)=>{
  const {id} = req.params
  
  
  
  Product.findByIdAndUpdate(id,{$inc: {quantity: -1 }}, {new: true})
  .populate('seller')
  .then((p) => {
  //  console.log("Hola, este es: ", p)
   let nuevo = {
  name: p.name,
  seller: p.seller,
  type: p.type[0],
  cuisine:p.cuisine[0],
  ingredients: p.ingredients,
  posted: p.posted,
  price: p.price,
  quantity:p.quantity -1,
  active:true,
  coordinatesTo:req.user.coordinates,
  addressTo: req.user.address,
  coordinatesFrom:p.coordinatesFrom,
  addressFrom: p.addressFrom,
  picture:p.picture,
  buyer: req.user._id,
  bought: true
   }
   Product.create(nuevo)
    .then(newProduct => {
      User.findByIdAndUpdate(req.user._id, { $push: { products: newProduct._id } }, {new: true})
      .then((x)=>{
      res.status(200).json(x)
      User.findByIdAndUpdate(p.seller._id, { $push: { products: newProduct._id } }, {new: true})
      .then((p)=>{
        res.status(200).json(p)
      })
})
.catch(e=>console.log(e))
    })
      
})
})

//arrived
router.post('/directions/:id',isAuth ,(req,res,next)=>{
  const {id} = req.params
  
  Product.findByIdAndUpdate(id,{delivered: true}, {new: true})
  .populate('seller')
  .then((p) => {
  console.log(p)
   res.status(200).json(p)
  })
  .catch(e=>console.log(e))
})
  
//in route
router.post('/inroute/:id',isAuth ,(req,res,next)=>{
  const {id} = req.params
  
  Product.findByIdAndUpdate(id,{track: true}, {new: true})
  .populate('seller')
  .then((p) => {
  console.log(p)
   res.status(200).json(p)
  })
  .catch(e=>console.log(e))
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

//edit product
router.post('/edit/:id', isAuth ,uploadCloud.single('photoURL'),(req,res,next)=>{
  const {id} = req.params


  Product.findByIdAndUpdate(id,{...req.body},{new:true})
  .then((p)=>{
    res.status(200)
  })
  .catch((e)=>next(e))
})
//delte
router.post('/delete/:id', isAuth ,uploadCloud.single('photoURL'),(req,res,next)=>{
  const {id} = req.params



  Product.findByIdAndRemove({_id:id})
  .then((p)=>{
    res.status(200)
  })
  .catch((e)=>next(e))
})
//index
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
