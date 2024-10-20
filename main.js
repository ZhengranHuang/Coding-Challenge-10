//Elements in task 1
const ProductName = document.getElementById("product-name")
const Price = document.getElementById("price-display")
//Task 2
const price ={
Small: 4,
Medium: 5,
Big: 6
};
const Smallprice = document.getElementById("small");
const Mediumprice = document.getElementById("medium");
const Bigprice = document.getElementById("big");
Smallprice.addEventListener('click',function(){
console.log(`Price is $${price.Small}`)
});
Mediumprice.addEventListener('click',function(){
console.log(`Price is $${price.Medium}`)
});
Bigprice.addEventListener('click',function(){
console.log(`Price is $${price.Big}`)
});
//Task3:so hard:(
//Task4:Create a Checkout Event Add an event listener to the purchase button
const Purchasebutton = document.getElementById("purchase");
Purchasebutton.addEventListener('click',function(){
console.log(`this assignment is so hard`)
});