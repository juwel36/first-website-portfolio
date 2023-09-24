// function handleOneCLick (){
//   const handelStatus = document.getElementById('handle-Status');
//   handelStatus.innerText='handle change by one click';
//     }

    
 document.getElementById('event-listener').addEventListener('click',function(){
const changeElement = document.getElementById('handel-Status');
changeElement.innerText=('hello sunar bangladesh')

 })
// -----------------------------    // 

document.getElementById('submit-button').addEventListener('click',function(){
  const inputField =document.getElementById('input-field');
  const inputText= inputField.value;
  
  const p=document.getElementById('parragraph');
  p.innerText=inputText;
  inputField.value=''
  })

// -------------





// add textarea on parragraph

document.getElementById('btn-post').addEventListener('click', function() {
  const commentBox = document.getElementById('new-comment');
  const newText = commentBox.value;

  const commentContainer = document.getElementById('comment-container');
  const p = document.createElement('p');
  p.innerText = newText;
  commentContainer.appendChild(p);
  console.log(commentContainer);
});
