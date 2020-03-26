var faker = require('faker');

console.log('-----------------------\n  Welcome to my shop     \n-----------------------');
var printProducts = function(n){
    for (var i = 0; i < n; i++){
        console.log(faker.commerce.productAdjective() + ' ' + faker.commerce.productMaterial() + ' ' + faker.commerce.product() + ' - ' + faker.commerce.price()+'$');
    }
}
printProducts(10);