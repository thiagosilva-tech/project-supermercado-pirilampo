const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  const uniqueProductsName = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (uniqueProductsName.length === 0) {
      uniqueProductsName.push(stockProducts[index].productName);
    } else if (!uniqueProductsName.includes(stockProducts[index].productName))
    uniqueProductsName.push(stockProducts[index].productName);
  }

  return uniqueProductsName;
};

module.exports = { getUniqueProductsName };
