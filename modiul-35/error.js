function checkAge(){

const ageField =document.getElementById('age')
const ageText=ageField.value ;
const errorTag=document.getElementById('error')

try{
const age=parseInt(ageText);

if(isNaN(age)){
throw "please enter a number"

}

}
catch(err){
console.log('error:',err);
errorTag.innerHTML='somthing wrong'+err;

}
finally{
console.log('try again all done');

}


}
