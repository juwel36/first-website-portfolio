

// document.getElementById('sub-btn').addEventListener('click',function(){
// const inputType=document.getElementById('input-type');
// const typeOutput=inputType.value;

// const p=document.getElementById('pragraph');
// p.innerText=typeOutput;
// inputType.value=''

// })



// document.getElementById('submit').addEventListener('click',function(){
// const inputText=document.getElementById('textArea');
// const inputResult = inputText.value;

// const divContainer =document.getElementById('div');
// const p=document.createElement('p') ;
// p.innerText=(inputResult);
// divContainer.appendChild(p)
// console.log(divContainer);

// })

document.getElementById('delete-confirm').addEventListener('keyup',function(event){
  const text =event.target.value;
  document.getElementById('btn-delete');
  if(text === 'delete'){
    deleteButton.removeAttribute('disabled');
  }else{
    deleteButton.setAttribute('disabled','disabled')
  }
  
  })






