const fs = require('fs');
const path = require('path');
const mainModulePath = require('../utils/mainModulePath');
const p = path.join(mainModulePath, 'data', 'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        })
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

}