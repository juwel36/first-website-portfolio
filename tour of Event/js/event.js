// important using function
function makeLightGreen(){
document.body.style.backgroundColor='lightgreen'
}
// option 3
const makePurple = document.getElementById('make-Purple');
makePurple.onclick=function (){
  document.body.style.backgroundColor='purple'
}

// option 4 ---important ....using id
document.getElementById('make-green').addEventListener('click',function(){
document.body.style.backgroundColor='green';

})

