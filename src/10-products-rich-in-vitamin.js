const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const productsRichInVitamin = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (!stockProducts[index].nutritionalInfo.vitamins === undefined) {
      let formattedPrice = `R$ ${stockProducts[index].price.toFixed(2)}`;
      let formattedVitamins = stockProducts[index].nutritionalInfo.vitamins.map(
        ([key, value]) => `${key} - ${value}`,
      );
      let nutritionalInfoVitamins = Object.entries(formattedVitamins);
      productsRichInVitamin.push({
        description: stockProducts[index].description,
        formattedPrice,
        vitaminsInformation: nutritionalInfoVitamins,
      });
    }
  }
  return productsRichInVitamin;
};

module.exports = { getProductsRichInVitamin };
