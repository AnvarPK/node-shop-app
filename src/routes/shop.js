const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
    const { products } = adminData;
    res.render('shop', {
        products,
        docTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        isShopPage: true,
    })
});


module.exports = router;
