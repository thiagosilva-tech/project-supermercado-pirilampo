const stockProducts = require('./data.json');

const searchProductByName = (productSearched) => {
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].productName === productSearched) {
      const formattedPrice = `R$ ${stockProducts[index].price.toFixed(2)}`;
      return {
        description: stockProducts[index].description,
        formattedPrice,
      };
    }
  }
  return null;
};

module.exports = { searchProductByName };
