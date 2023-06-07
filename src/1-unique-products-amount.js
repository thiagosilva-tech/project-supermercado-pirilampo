const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
    return stockProducts.length; 
};

module.exports = { getUniqueProductsAmount };
