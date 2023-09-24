function matchFinder (number){
if (typeof Number !== "string"){
return "plese provide string"
}

if(number[0].includes(number[1])){
return true
}else{
  return false
}



}


console.log(matchFinder(54));




































