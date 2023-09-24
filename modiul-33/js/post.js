// function TakePost (){
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data=> displayPost(data))
// }
// function displayPost (value){
// const postContainer = document.getElementById('post-container')
// for(const post of value){
//   const divPOst=document.createElement('div');
//   // console.log(post);
//   divPOst.classList.add('style')
// divPOst.innerHTML=`
// <h3> user- ${post.id} </h3>
// <h6> bode- ${post.body} </h6>
// <p> user- ${post.title} </p>
// `
// postContainer.appendChild(divPOst)
// }
// }
// TakePost();

// -----------------------------------------------------------------------------------

function findComment(){
fetch('https://jsonplaceholder.typicode.com/comments')
.then(res=> res.json())
.then(data=>takeComment(data))
}

function takeComment (data){
const div=document.getElementById('post-container')
for(const item of data){
const ul=document.createElement('div')
ul.classList.add('style')
ul.innerHTML=`

<h2>Id: ${item.id} </h2>
<h3>Name : ${item.name} </h3>
<h5>Email: ${item.email} </h5>
<p>Body: ${item.body}</p>

`
div.appendChild(ul)
}
}


findComment()



