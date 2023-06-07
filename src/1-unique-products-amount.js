const stockProducts = require('./data.json');

const getUniqueProductsAmount = (data) => {
  if(data === undefined){
    return 0;
  }

  let productsUniques = []; 

  for (let i = 0; i < data.length; i += 1) {
    if (productsUniques.length === 0) {
      productsUniques.push(data[i].productName); 
    } else if (!productsUniques.includes(data[i].productName)) {
      productsUniques.push(data[i].productName);
    }    
  }
  return productsUniques.length;
};

module.exports = { getUniqueProductsAmount };
