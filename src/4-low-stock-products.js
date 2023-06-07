const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const lowStockProducts = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (
      stockProducts[index].quantityInStock > 0
      && stockProducts[index].quantityInStock <= 10
    ) {
      lowStockProducts.push(
        `${stockProducts[index].productName}: ${stockProducts[index].quantityInStock} unidades`,
      );
    }
  }

  return lowStockProducts;
};

module.exports = { getLowStockProducts };
