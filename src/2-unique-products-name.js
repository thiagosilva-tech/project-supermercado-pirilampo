const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let uniqueProductsName = [];
  if (stockProducts.length === 0) {
    return uniqueProductsName;
  }
  uniqueProductsName = [stockProducts[0].productName];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (!uniqueProductsName.includes(stockProducts[index].productName)) {
      uniqueProductsName.push(stockProducts[index].productName);
    }
  }
  return uniqueProductsName;
};

module.exports = { getUniqueProductsName };
