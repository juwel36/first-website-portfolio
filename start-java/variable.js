

// function cubeNumber(number) {
//   if (typeof number !== 'number' || number <= 0) {
//     return"Input must be a positive number.";
// }

// cube = number * number * number;
// return cube

// }





// function matchFinder(string1, string2){
// if(typeof string1 !== "string" || typeof string2 !== "string"){
// return "Please provide valid strings."
// }


// if (string1.includes(string2)){
// return true;
// }
// else{
// return false;
// }
// }





// function sortMaker(arr) {
  
//   if (arr[0] < 0 || arr[1] < 0) {
//       return "Invalid Input";
//   }
  
//   if (arr[0] === arr[1]) {
//       return "equal";
//   }
  

//       if (arr[0] < arr[1]) {
//           const temp = arr[0];
//           arr[0] = arr[1];
//           arr[1] = temp;
//       }
//       return arr;
    
  
// }

  










// function findAddress(obj) {

// const road = obj.street || "__"
// const home = obj.house  || "__"
// const community = obj.society  || "__"

// return road+","+home+","+community;
// }









// function canPay(changeArray, totalDue) {
//   if (changeArray.length === 0) {
//     return "You have no retail money.";
// }

// let retailPrice=0
// for (const value of changeArray){
//   retailPrice += value;
  
// }
// if(retailPrice>=totalDue){
// return true
// }
// else{
//   return false
// }
// }

// console.log(canPay([2,3,4],10));

// -------------------------------------------------------------------------------------------


const products =[
{id:1, name : "nokia phone in one night", price :12300},
{id:2, name : "iphone", price :12300},
{id:3, name : "mac book air", price :112300},
{id:4, name : "lenova yes leptop 2025", price :12300},
{id:5, name : "dell leptop", price :12300},
{id:6, name : "pixel Phone best age friends", price :12300},
{id:7, name : "phone one", price :12300},

];

function findDevice (products,search){
const matched=[];
for (const product of products){
  if(product.name.toLowerCase().includes(search.toLowerCase())){
matched.push(product)
  }
}return matched

}

console.log(findDevice(products,"leptop"));






// function findDevice (products,search){
// matched=[];
// for(const product of products){
// if(product.name.toLowerCase().includes(search.toLowerCase())){
// matched.push(product)
  
// }
// }return matched;

// }
// console.log(findDevice(products,"phone"));












 



















