(function() {
  /* globals items */
  var priceSum = items.reduce((currentSum, item) => {
    return currentSum + item.price;
  }, 0);

  var averagePrice = priceSum / items.length;

  console.log(averagePrice); // function for question one ^

  var inPrice = items.filter((item) => {
    return item.price > 14 && item.price < 18;
  })
  .map(function(item) {
    return item.title;
  });

  console.log(inPrice); // function for question two ^

  var curr = items.filter((item) => {
    return item.currencyCode === 'GBP';
  })
.map(function(item) {
  return item.title + 'cost' + item.price;
});

  console.log(curr); // function for question three ^

  var woodPull = items.filter((item) => {
    if (item.materials) {
      return item.materials.indexOf('wood') !== -1;
    }
  })
  .map(function(item) {
    return item.title;
  });

  console.log(woodPull); // function for question 4 ^

  var eightMat = items.filter((item) => {
    if (item.materials) {
      return item.materials.length >= 8;
    }
  }).map(function(item) {
     return item.title + item.materials;
   }
 );

  console.log(eightMat); // function for question 5 ^

  var madeBy = items.filter((item) => {
    if (item.whoMade) {
      return item.whoMade.indexOf('i_did') !== -1;
    }
  });

  console.log(madeBy.length + ' were made by their sellers');
})();
