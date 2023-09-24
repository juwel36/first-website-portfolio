document.getElementById('btn-submit').addEventListener('click',function(){

  const emailField=document.getElementById('user-email');
  const email= emailField.value; 

  const passwordField=document.getElementById('user-password');
  const password=passwordField.value;
  
  if(email==="baperhotel@gmail.com" && password==="123a"){
    location.href='bank.html'
  }else{
    alert('Give the right Email and password otherwise baaag salarput')
  }

})



















// document.getElementById('btn-submit').addEventListener('click',function(){
// const emailField=document.getElementById('user-email');
// const email=emailField.value;

// const passwordField=document.getElementById('user-password');
// const password=passwordField.value;

// if(email==='baperbank@gmail.com' && password=== "123"){
//   location.href='bank.html'
// }
// else{
//   alert('Give the right Email and password otherwise baaag salarput')
// }

// })







