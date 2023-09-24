function getInputFieldId (inputValue){
const inputField=document.getElementById(inputValue);
const inputFieldValueString=inputField.value ;
const inputFieldValue=parseFloat(inputFieldValueString);

inputField.value='';
return inputFieldValue;
}

function getElementById (elementId){
const element=document.getElementById(elementId);
const elementvalueString=element.innerText ;
const elementvalue=parseFloat(elementvalueString)

return elementvalue;
}

function setTextElementValueById (element,newValue){
const valuee =document.getElementById(element)
valuee.innerText=newValue;

}


























// function getInputFieldValueById (inputFieldId){
// const inputField=document.getElementById(inputFieldId);
// const inputFieldValueString=inputField.value ;
// const inputFieldValue=parseFloat(inputFieldValueString);

// inputField.value='';
// return inputFieldValue;
// }

// function getTextElementValueById(elementId){
// const textElement=document.getElementById(elementId);
// const textElementValueString=textElement.innerText;
// const textElementValue=parseFloat(textElementValueString);

// return textElementValue
// }

// function setTextElementValueById(element,newValue){
// const innerText=document.getElementById(element);
// innerText.innerText=newValue;

// }








