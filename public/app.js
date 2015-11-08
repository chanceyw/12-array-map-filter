(function() {

  var priceSum = items.reduce((currentSum, item) => {
    return currentSum + item.price;
  }, 0);

  var averagePrice = priceSum / items.length;

  console.log(averagePrice);

})();
