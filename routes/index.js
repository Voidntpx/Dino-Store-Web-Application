var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Wishlist = require('../models/wishlist');
var Product = require('../models/product');
var Order = require('../models/order');
var User = require('../models/user');
var Comment = require('../models/comment');
const yesno = require('yesno');
var ObjectId = require('mongodb').ObjectID;
// const cart = require('../models/cart');



/* GET home page. */
router.get('/',function(req, res, next) {
  var successMsg = req.flash('success')[0];

    Product.find({},function(err, docs){
      var productChunks = [];
      var chunkSize= 4;
      for(var i =0 ; i< 4;i+=chunkSize){ 
        productChunks.push(docs.slice(i , i+chunkSize));
      }
        
     

      res.render('shop/index', { title: 'Jurassic Shop',products: productChunks});
    }).sort({dated: -1});
});


router.get('/dinosaur', function(req, res, next){
  var successMsg = req.flash('success')[0];
  Product.find({ tag: 'Dinosaur' }, function(err, docs){
    var productChunks = [];
    var chunkSize= 4;
    for(var i =0 ; i< docs.length;i+=chunkSize){
      
      productChunks.push(docs.slice(i , i+chunkSize));

    }
    res.render('shop/allproduct', { title: 'Jurassic Shop',products: productChunks, successMsg: successMsg, noMessages: !successMsg });
  });
  
});

router.get('/food', function(req, res, next){
  var successMsg = req.flash('success')[0];
  Product.find({ tag: 'Food' }, function(err, docs){
    var productChunks = [];
    var chunkSize= 4;
    for(var i =0 ; i< docs.length;i+=chunkSize){
      
      productChunks.push(docs.slice(i , i+chunkSize));

    }
    res.render('shop/allproduct', { title: 'Jurassic Shop',products: productChunks, successMsg: successMsg, noMessages: !successMsg });
  });
  
});

router.get('/toy', function(req, res, next){
  var successMsg = req.flash('success')[0];
  Product.find({ tag: 'Toy' }, function(err, docs){
    var productChunks = [];
    var chunkSize= 4;
    for(var i =0 ; i< docs.length;i+=chunkSize){
      
      productChunks.push(docs.slice(i , i+chunkSize));

    }
    res.render('shop/allproduct', { title: 'Jurassic Shop',products: productChunks, successMsg: successMsg, noMessages: !successMsg });
  });
  
});

router.get('/Carnivores', function(req, res, next){
  var successMsg = req.flash('success')[0];
  Product.find({ type: 'Carnivores' }, function(err, docs){
    var productChunks = [];
    var chunkSize= 4;
    for(var i =0 ; i< docs.length;i+=chunkSize){
      
      productChunks.push(docs.slice(i , i+chunkSize));

    }
    res.render('shop/allproduct', { title: 'Jurassic Shop',products: productChunks, successMsg: successMsg, noMessages: !successMsg });
  });
  
});

router.get('/Herbivores', function(req, res, next){
  var successMsg = req.flash('success')[0];
  Product.find({ type: 'Herbivores' },function(err, docs){
    var productChunks = [];
    var chunkSize= 4;
    for(var i =0 ; i< docs.length;i+=chunkSize){
      
      productChunks.push(docs.slice(i , i+chunkSize));

    }
    res.render('shop/allproduct', { title: 'Jurassic Shop',products: productChunks, successMsg: successMsg, noMessages: !successMsg });
  });
});

router.get('/ascending', function(req, res, next){
  var successMsg = req.flash('success')[0];

  Product.find({},function(err, docs){
    var productChunks = [];
    var chunkSize= 4;
    for(var i =0 ; i< docs.length;i+=chunkSize){
      
      productChunks.push(docs.slice(i , i+chunkSize));

    }
    res.render('shop/allproduct', { title: 'Jurassic Shop',products: productChunks, successMsg: successMsg, noMessages: !successMsg });
  }).sort({price: 1});
});

router.get('/descending', function(req, res, next){
  var successMsg = req.flash('success')[0];

  Product.find({},function(err, docs){
    var productChunks = [];
    var chunkSize= 4;
    for(var i =0 ; i< docs.length;i+=chunkSize){
      
      productChunks.push(docs.slice(i , i+chunkSize));

    }
    res.render('shop/allproduct', { title: 'Jurassic Shop',products: productChunks, successMsg: successMsg, noMessages: !successMsg });
  }).sort({price: -1});
});

router.get('/allproduct',function(req, res, next) {

  var successMsg = req.flash('success')[0];
 
  Product.find(function(err, docs){
    var productChunks = [];
    var chunkSize= 4;
    for(var i =0 ; i< docs.length;i+=chunkSize){
      
      productChunks.push(docs.slice(i , i+chunkSize));

    }

      res.render('shop/allproduct', { title: 'Jurassic Shop',products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    

  });
});

router.get('/buynow/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
     if (err) {
         return res.redirect('/allproduct');
     }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/cart');
  });
});

router.get('/additemtocart/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
     if (err) {
         return res.redirect('/allproduct');
     }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('back');
  });
});


router.get('/additemtocart2/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
     if (err) {
         return res.redirect('/');
     }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/cart');
  });
});

router.get('/additemtocart3/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
     if (err) {
         return res.redirect('/');
     }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('back');
  });
});

router.get('/addoneitem/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.addByOne(productId);
  req.session.cart = cart;
  res.redirect('/cart');
});

router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/cart');
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/cart');
});

router.get('/productmanagement', isLoggedIn, function (req, res, next) {
  var productId = req.params.id;
  var successMsg = req.flash('success')[0];
  var failMsg = req.flash('error')[0];
  
  if(req.user.username == "Admin"){
  Product.find({}, function(err, product) {
     if (err) {
         return res.redirect('/allproduct');
     }
      res.render('shop/productmanagement',{products: product,successMsg: successMsg, noMessages: !successMsg,failMsg: failMsg, nofailMessages: !failMsg  });
  });
}
  else{
    Product.find({sellerid: req.user._id}, function(err, product) {
      if (err) {
          return res.redirect('/allproduct');
      }
       res.render('shop/yourproduct',{products: product,successMsg: successMsg, noMessages: !successMsg,failMsg: failMsg, nofailMessages: !failMsg  });
   });
  }

});


router.get('/hithere', isLoggedIn, function (req, res, next) {
 
       res.render('shop/hithere');
});

router.get('/editproduct/:id', isLoggedIn, function (req, res, next) {
  var productId = req.params.id;
  var successMsg = req.flash('success')[0];
  var failMsg = req.flash('error')[0];
  
  Product.find({_id: productId}, function(err, product) {
     if (err) {
         return res.redirect('/allproduct');
     }
      res.render('shop/editproduct',{products: product,successMsg: successMsg, noMessages: !successMsg,failMsg: failMsg, nofailMessages: !failMsg  });
  });
  

});


router.post('/editproduct/:id', isLoggedIn, function (req, res, next) {

  var item = {
    imagePath: req.body.imglink,
    title: req.body.productname,
    description: req.body.description,
    selldescription: req.body.productdetails,
    type: req.body.type,
    tag: req.body.tag,
    price: req.body.price,
    lastupdated: new Date()
  };

  var id = req.params.id;

  console.log(id);
  Product.update({ _id: id},{$set: item},function(err,result){
      if(err) res.json(err);

        req.flash('success', 'your product was edited!');
        res.redirect('back');
    });
});

router.get('/deletewish/:id', isLoggedIn, function (req, res, next) {

  var x = req.params.id;
  console.log(x);
  Wishlist.remove({ _id: x},function(err){
      if(err) res.json(err);
        res.redirect('/wishlist');
    });
});

router.get('/deleteproduct/:id', isLoggedIn, function (req, res, next) {

  var x = req.params.id;
  console.log(x);
  Product.remove({ _id: x},function(err){
      if(err) res.json(err);
        req.flash('success', 'Sucessfully Delete!');
        res.redirect('back');
    });
});

router.get('/deleteproduct2/:id', isLoggedIn, function (req, res, next) {

  var x = req.params.id;
  console.log(x);
  Product.remove({ _id: x},function(err){
      if(err) res.json(err);
        res.redirect('back');
    });
});

router.get('/deletehistory/:id', isLoggedIn, function (req, res, next) {

  var x = req.params.id;
  console.log('hi');
  console.log(x);
  Order.remove({ item: x},function(err,result){
      if(err) res.json(err);

        res.redirect('back');
    });
});

router.get('/deletecomment/:username/:id', isLoggedIn, function (req, res, next) {

  var x = req.params.id;
  var y = req.params.username;
  
  if(req.user.username!= y){
    req.flash('error', 'you can not delete other users comment!');
    res.redirect('back');
  }
  else if(req.user.username=="Admin"){
    Comment.remove({ _id: x},function(err){
      if(err) res.json(err);
      req.flash('success', 'Sucessfully Delete!');
        res.redirect('back');
    });
  }
  else{
  Comment.remove({ _id: x},function(err){
      if(err) res.json(err);
      req.flash('success', 'Sucessfully Delete!');
        res.redirect('back');
    });
  }
});

router.get('/cart', function (req, res, next) {
  if (!req.session.cart) {
      return res.render('shop/cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/productdetail/:id', function (req, res, next) {
  var productids = req.params.id;
  var successMsg = req.flash('success')[0];
  var failMsg = req.flash('error')[0];
  Product.find({_id: productids}, function(err, docs) {

    var productChunks = [];
    var chunkSize= 1;
    for(var i =0 ; i<= docs.length;i+=chunkSize){
      
      productChunks.push(docs.slice(i , i+chunkSize));

    }
    if(isLoggedIn){
      console.log(productids);
    }

    Comment.find({productid: productids}, function(err, result) {
      res.render('shop/productdetail',{products: docs,comments: result,successMsg: successMsg, noMessages: !successMsg,failMsg: failMsg, nofailMessages: !failMsg});
    }).sort({dated: -1});

 });
});

router.get('/productdetail2/:title', function (req, res, next) {
  var productname = req.params.title;
  var successMsg = req.flash('success')[0];
  var failMsg = req.flash('error')[0];
  Product.find({title: productname}, function(err, docs) {

    var productChunks = [];
    var chunkSize= 1;
    for(var i =0 ; i<= docs.length;i+=chunkSize){
      
      productChunks.push(docs.slice(i , i+chunkSize));

    }

    Comment.find({title: productname}, function(err, result) {
      res.render('shop/productdetail',{products: docs,comments: result,successMsg: successMsg, noMessages: !successMsg,failMsg: failMsg, nofailMessages: !failMsg});
    }).sort({dated: -1});

 });
});

router.get('/addcomment', isLoggedIn,function (req, res, next) {

  var successMsg = req.flash('success')[0];
 
  Product.find(function(err, docs){
    var productChunks = [];
    var chunkSize= 4;
    for(var i =0 ; i< docs.length;i+=chunkSize){
      
      productChunks.push(docs.slice(i , i+chunkSize));

    }
    res.render('shop/allproduct', { title: 'Jurassic Shop',products: productChunks, successMsg: successMsg, noMessages: !successMsg });
  });
});

router.post('/addcomment', isLoggedIn,function (req, res, next) {
    var productname = req.params.title;
    // var productid = req.params.id;
    
  Product.find({title: productname}, function(err, docs) {
    console.log(req.user);
    console.log(req.body.productid);
    console.log(req.body.message);
    console.log(req.body.producttitle);
    var comment = new Comment({
        user: req.user,
        username: req.user.username,
        title: req.body.producttitle,
        productid: req.body.productid,
        message: req.body.message,
        dated: new Date()
      });

      comment.save(function(err, result){
        res.redirect('back');
      });
     
 });

});



router.get('/checkout', isLoggedIn,function (req, res, next) {

    if(!req.session.cart){
      return res.redirect('shop/cart');
    }
    var cart = new Cart(req.session.cart.items);
    res.render('shop/checkout',{total: cart.totalPrice });

    
});
router.post('/checkout', isLoggedIn,function (req, res, next) {

  if(!req.session.cart){
    return res.redirect('shop/checkout');
  }
  var cart = new Cart(req.session.cart);

    var order = new Order({
      user: req.user,
      cart: cart,
      address: req.body.address,
      name: req.body.name,
      dated: new Date()
    });
    order.save(function(err, result){
      req.flash('success', 'Sucessfully bought!');
      req.session.cart=null;
      res.redirect('/allproduct');
    });
    
  });

  router.post('/addproduct', isLoggedIn,function (req, res, next) {

      var product = new Product({
        imagePath: req.body.imglink,
        title: req.body.productname,
        description: req.body.description,
        selldescription: req.body.productdetails,
        type: req.body.type,
        tag: req.body.tag,
        price: req.body.price,
        sellerid: req.user,
        dated: new Date(),
        lastupdated: new Date()
      });
      if(req.body.type=="0"||req.body.tag=="0"){
        req.flash('error', 'Failed something went wrong!');
        res.redirect('/user/seller');
      }
      else{
      product.save(function(err, result){
        req.flash('success', 'your product was added!');
        res.redirect('/user/seller');
      });
    }
    });
  router.get('/searchbar', function(req,res,next){
    var successMsg = req.flash('success')[0];
    var q =req.query.search;
    console.log(req.query.search);
    console.log(RegExp(q));

    Product.find({
      title:{ $regex: new RegExp(q) } },

      { _id:0, __v:0}, 

    function(err, data){
    var productChunks = [];
    var chunkSize= 4;
    for(var i =0 ; i< data.length;i+=chunkSize){
      
      productChunks.push(data.slice(i , i+chunkSize));

    }
    res.render('shop/hithere', { title: 'Jurassic Shop',products: productChunks, successMsg: successMsg, noMessages: !successMsg });
    });
    
  });


  router.get('/wishlist', isLoggedIn, function (req, res, next) {
    Wishlist.find({user: req.user}, function(err, wishitems) {
            var productChunks = [];
            var chunkSize= 4;
            for(var i =0 ; i< wishitems.length;i+=chunkSize){
              
              productChunks.push(wishitems.slice(i , i+chunkSize));
        
            }
            res.render('user/wishlist', { title: 'Jurassic Shop',wishitems: productChunks });
          });
});

router.get('/addtowishlist/:title/:price/:tag/:id', isLoggedIn, function (req, res, next) {
    var producttag = req.params.tag;
    var productname = req.params.title;
    var productprice = req.params.price;
    var productid = req.params.id;
  Product.find({title: productname}, function(err, docs) {

    var wishlist = new Wishlist({
        user: req.user,
        productid: productid,
        title: productname,
        tag: producttag,
        price: productprice
        
      });
      console.log(docs);
      wishlist.save(function(err, result){
        req.flash('success', 'Added');
        res.redirect('/allproduct');
      });
     
 });
});

router.get('/addtowishlist2/:title/:price/:tag/:id', isLoggedIn, function (req, res, next) {
    var producttag = req.params.tag;
    var productname = req.params.title;
    var productprice = req.params.price;
    var productid = req.params.id;
  Product.find({title: productname}, function(err, docs) {

    var wishlist = new Wishlist({
        user: req.user,
        productid: productid,
        title: productname,
        tag: producttag,
        price: productprice
        
      });
      console.log(docs);
      wishlist.save(function(err, result){
        res.redirect('back');
      });
     
 });
});

router.get('/addtowishlist2/:title/:price/:tag/:id', isLoggedIn, function (req, res, next) {
    var producttag = req.params.tag;
    var productname = req.params.title;
    var productprice = req.params.price;
    var productid = req.params.id;
  Product.find({title: productname}, function(err, docs) {

    var wishlist = new Wishlist({
        user: req.user,
        productid: productid,
        title: productname,
        tag: producttag,
        price: productprice
        
      });
      console.log(docs);
      wishlist.save(function(err, result){
      });
     
 });
});
  function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/user/signin');
}