

boldButton.addEventListener('click', function() {
  // if (editor.style.fontWeight === 'bold') {
  //   editor.style.fontWeight = 'normal';
   
  // } else {
  //   editor.style.fontWeight = 'bold';
    
  // }
editor.classList.toggle('fontWeight');
});

italicButton.addEventListener('click', function() {
  editor.classList.toggle('fontStyle');
});

underlineButton.addEventListener('click', function() { 
editor.classList.toggle('fontStylee')
});

// --------------------------------------------------------------



centerSide.addEventListener('click', function() {
  editor.style.textAlign='center';
});

rightSide.addEventListener('click',function(){
  editor.style.textAlign='right';
})

leftSide.addEventListener('click',function(){
  editor.style.textAlign='left';
});

// ---------------





const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('change', function() {
  const selectedColor = colorPicker.value;
  editor.style.color = selectedColor;
});








































// document.getElementById("discount-btn").addEventListener("click", function() {
  
// const originalPrice=1000;

// const cuponValue=document.getElementById('cupon')
// const cuponValueText=cuponValue.value ;

// // let sumprice=originalPrice
// if(cuponValueText==='j'){
//  sumprice=originalPrice*0.7;

// }
// const total=document.getElementById("pay")
// total.innerText=sumprice;
 
// });



// const originalPrice = 1000;
// const discountedPrice = originalPrice * 0.7; 

// const total=document.getElementById("pay")
// total.innerText=discountedPrice
