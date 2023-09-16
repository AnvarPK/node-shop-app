const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        docTitle: 'Add Product',
        path: '/admin/add-product',
        isAddProductPage: true,
    });
};

exports.postAddProduct = (req, res, next) => {
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', {
        products,
        docTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        isShopPage: true,
    })
};