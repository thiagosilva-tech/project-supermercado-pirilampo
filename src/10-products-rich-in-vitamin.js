const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const productsRichInVitamin = [];
  for (let index = 0; index < stockProducts.length; index++) {
    if (stockProducts[index].nutritionalInfo.vitamins != undefined) {
      let formattedPrice = `R$ ${stockProducts[index].price.toFixed(2)}`;
      let nutritionalInfoVitamins = Object.entries(stockProducts[index].nutritionalInfo.vitamins).map(([key, value]) => `${key} - ${value}`);
      productsRichInVitamin.push({
        description: stockProducts[index].description,
        formattedPrice: formattedPrice,
        vitaminsInformation: nutritionalInfoVitamins
      })
    }    
  }
  return  productsRichInVitamin;
};

module.exports = { getProductsRichInVitamin };
