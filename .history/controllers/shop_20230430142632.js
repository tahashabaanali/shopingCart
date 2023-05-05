/* eslint-disable prefer-const */
const fs  = require('fs');
const path  = require('path');

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const {productId} = req.params ;
  console.log(productId);
  Product.fetchAll(products =>{
    const product = products.find(prod => prod.id === productId)
    res.render('shop/product-detail',{
      product,
      pageTitle :product.title,
      path:'/products'
    })
  })
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = async (req, res, next) => {
  // get from client side
   const {productId, price}= req.body;
   const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');
   let cart = {products:[], totalPrice:0}
   try{
      const dataFile = await fs.readFile(p);
      if (!dataFile) {
        cart = JSON.parse(dataFile)
      }
      const existingProductIndex= cart.products.findIndex(prod => prod.id === productId);
      // const 
      if(existingProduct){
        const updateProduct =cart.products[existingProductIndex];
        updateProduct.quantity = +updateProduct.quantity + 1;
        
      }
      else{
           cart.products.push(price)
      }

      fs.writeFile(p, JSON.stringify(cart), (err) =>{
        console.log(err);
      })

   }catch(err) {
    console.log(err)
   }
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};