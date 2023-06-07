const stockProducts = require('./data.json');
const teste = {};
const getUniqueProductsAmount = (data) => {
  let productsUniques = []; 

  for (let i = 0; i < data.length; i++) {
    if (productsUniques[0] === []) {
      productsUniques = data[0].productName
    } else if (!productsUniques.includes(data[i].productName)) {
      productsUniques.push(data[i].productName);
    }    
  }  

  return productsUniques.length;
};

module.exports = { getUniqueProductsAmount };
