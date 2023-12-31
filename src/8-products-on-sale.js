const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  const productsOnSale = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {
      const formattedPrice = `R$ ${stockProducts[index].price.toFixed(2)}`;
      productsOnSale.push({
        description: stockProducts[index].description,
        formattedPrice,
        onSale: stockProducts[index].onSale,
      });
    }
  }
  return productsOnSale;
};

module.exports = { getProductsOnSale };
