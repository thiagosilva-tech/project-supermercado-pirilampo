const stockProducts = require('./data.json');

function getProductsWithAllergyOrIntoleranceInfo() {
  const productsWithAllergyOrIntoleranceInfo = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const { price, allergyOrIntolerance, description } = stockProducts[index];
    const formattedPrice = `R$ ${price.toFixed(2)}`;
    if (allergyOrIntolerance !== undefined) {
      const formattedAllergyOrIntolerance = allergyOrIntolerance.join(' ').replace(/['"]/g, '');
      const allergyOrIntoleranceMessage = `Pode conter: ${formattedAllergyOrIntolerance}`;
      productsWithAllergyOrIntoleranceInfo.push({
        description, formattedPrice, allergyOrIntoleranceMessage,
      });
    } else {
      productsWithAllergyOrIntoleranceInfo.push({
        description, formattedPrice,
      });
    }
  }
  return productsWithAllergyOrIntoleranceInfo;
}

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
