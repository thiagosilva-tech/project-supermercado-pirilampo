const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const productsWithAllergyOrIntoleranceInfo = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    let formattedPrice = `R$ ${stockProducts[index].price.toFixed(2)}`;

    if (stockProducts[index].allergyOrIntolerance != undefined) {
      let formattedAllergyOrIntolerance = stockProducts[index].allergyOrIntolerance.join(' ').replace(/['"]/g, '');
      let allergyOrIntoleranceMessage = `Pode conter: ${formattedAllergyOrIntolerance}`;
      productsWithAllergyOrIntoleranceInfo.push({
        description: stockProducts[index].description,
        formattedPrice: formattedPrice,
        allergyOrIntoleranceMessage: allergyOrIntoleranceMessage
      });
    } else {
      productsWithAllergyOrIntoleranceInfo.push({
        description: stockProducts[index].description,
        formattedPrice: formattedPrice,
      });
    }
  }
  return productsWithAllergyOrIntoleranceInfo;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
