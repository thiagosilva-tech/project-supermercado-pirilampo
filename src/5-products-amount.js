const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let productsAmount = 0;
  for (let index = 0; index < stockProducts.length; index++) {
    productsAmount += stockProducts[index].quantityInStock;
  }

  return productsAmount;
};

module.exports = { getProductsAmount };
