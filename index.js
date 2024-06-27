// Write your solution in this file!
//Declare variable in global scope
var customerName="bob"
//Modifies variable to uppercase
function upperCaseCustomerName(){
    customerName=customerName.toUpperCase()
}
//sets best customer
function setBestCustomer (){
    bestCustomer="not bob"
}
//overwrites best customer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
//Does not overwrite least favorite customer

const leastFavoriteCustomer="John"
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="bob"
}

