const stockProducts = require('./data.json');

const searchProductsByBrand = (brandSearched) => {
  const brandFound = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].brand === brandSearched) {
      const formattedPrice = `R$ ${stockProducts[index].price.toFixed(2)}`;
      brandFound.push({
        description: stockProducts[index].description,
        formattedPrice,
      });
    }
  }
  return brandFound;
};

module.exports = { searchProductsByBrand };
