(function() {

  var priceSum = items.reduce((currentSum, item) => {
    return currentSum + item.price;
  }, 0);

  var averagePrice = priceSum / items.length;

  console.log(averagePrice); // function for question one ^

  var inPrice = items.filter((item) => {
    return item.price > 14 && item.price < 18;
    map(function(item) {
      return items.title;
      console.log(inPrice);
    });
  });


})();
