function calculateTriangleArea(){

const base= getElementById('triangle-base');
const height= getElementById('triangle-height');

if(isNaN(base)||isNaN(height)){
  alert('please give number')
  return;
  }
const total=0.5*base*height;
setElementbyId('triangle-area',total);


}


// card 2

function calculateRectangleArea(){

const width= getElementById('rectangle-width');
const height= getElementById('rectangle-length');

const total=width*height;
setElementbyId('rectangle-area',total);

}
// card3

function calculateParallelogramArea(){

  const base=getElementById('parallelogram-base');
  const height=getElementById('parallelogram-height');

  const total=base*height;
setElementbyId('parallelogram-area',total);


}
// pai
function calculateEllipseArea(){
const large=getElementById('ellipse-major-radius')
const short=getElementById('ellipse-minor-radius')

const total=3.1416*large*short;

setElementbyId('ellipse-area',total);

}
















// function calculateTriangleArea(target){
// const baseField=document.getElementById('triangle-base');
// const baseValueText=baseField.value ;
// const base=parseFloat(baseValueText)




// const heightField=document.getElementById('triangle-height');
// const heightValueText=heightField.value;
// const height=parseFloat(heightValueText)

// const area = 0.5 *base*height;
// console.log(area);
// const areaSpan=document.getElementById('triangle-area')
// areaSpan.innerText=area;

// }


// function calculateRectangleArea (){
//   const widthField=document.getElementById('rectangle-width');
// const widthValueText=widthField.value;
// const width=parseFloat(widthValueText);

// const lengthField=document.getElementById('rectangle-length');
// const lengthValueText=lengthField.value;
// const length=parseFloat(lengthValueText);

// const area=width*length;

// const rectangleAreaSpan=document.getElementById('rectangle-area');
// rectangleAreaSpan.innerText=area;




// }
// // card 3
// // 



// // 

// function calculateParallelogramArea(){

//   const base=getInputValue('parallelogram-base');
//   const height=getInputValue('parallelogram-height')

//   const area=base*height;
// console.log(area);

// setMathCalculation('parallelogram-area',area)

// }






