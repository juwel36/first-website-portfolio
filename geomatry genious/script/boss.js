
function getElementById (id){
  const fieldValue=document.getElementById(id);
  const fieldValueString=fieldValue.value ;
  const value=parseFloat(fieldValueString);
  return value;

}

function setElementbyId(element,value){
const set=document.getElementById(element);
set.innerText=value;



}





// function getInputValue(id) {
//   const findValue = document.getElementById(id);
//   const findValueString = findValue.value;
//   const value = parseFloat(findValueString);
//   return value;
// }

// function setMathCalculation(element, newValue) {
//   const findsum = document.getElementById(element);
//   findsum.innerText = newValue;
// }

