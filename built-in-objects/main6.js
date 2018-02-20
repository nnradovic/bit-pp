// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// [
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]

// Write a function that calculates the total price of your shopping list. 
// Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 


var obj = {
    product: [{
            name: 'apples',
            price: 100
        },
        {
            name: 'milk',
            price: 80
        },
        {
            name: 'bananas',
            price: 150
        }
    ],

    priceSum: function () {
        var sum = 0;
        for (var i = 0; i < this.product.length; i++) {
            sum += this.product[i].price;
        }
        return sum


    },
    priceAvg: function () {
        var avgPrice = 0;
        avgPrice = this.priceSum() / this.product.length;
        return avgPrice;
    },
    printMax: function () {
        var newArrPrice = [];
        for (var i = 0; i < this.product.length; i++) {
            newArrPrice[i]= this.product[i].price;
        }
        var max = newArrPrice.sort((a, b) => a - b)
        return this.product[max.length-1].name;
    }

}

console.log(obj.priceSum())
console.log(obj.priceAvg())
console.log(obj.printMax())
