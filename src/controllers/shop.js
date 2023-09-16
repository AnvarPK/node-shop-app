const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            products,
            docTitle: 'Shop',
            path: '/products',
        })
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-details', {
            product,
            docTitle: `${product.title}`,
            path: '/products',
        })
    })
};

exports.getDelete = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            products,
            docTitle: 'Shop',
            path: '/products',
        })
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            products,
            docTitle: 'Shop',
            path: '/',
        })
    });
};

exports.getCart = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/cart', {
            products,
            docTitle: 'Your Cart',
            path: '/cart',
            cartItems: [],
        })
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
        res.redirect('/cart');
    })
};


exports.getCheckout = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/checkot', {
            products,
            docTitle: 'Checkout',
            path: '/checkot',
        })
    });
};

exports.getOrders = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/orders', {
            products,
            docTitle: 'Orders',
            path: '/orders',
        })
    });
};