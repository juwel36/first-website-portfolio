

// const addSongName = document.getElementById('newSong');
// const li=document.createElement('li');
// li.innerText=('gaja baba');
// addSongName.appendChild(li);


// const mainCOntainer =document.getElementById('main-container');
// const sectionDress =document.createElement('section');
// sectionDress.innerHTML=`
// <h1>Fruits i like</h1>
// <ul>
//    <li class="fab-fruits">apple</li>
//    <li class="fab-fruits">banana</li>
//    <li class="fab-fruits">orange</li>
//    </ul>
// `
// mainCOntainer.appendChild(sectionDress);



document.getElementById('sub-btn').addEventListener('click',function(){

const inputvaluee =document.getElementById('input-field');
const inputvalue=inputvaluee.value;

const p =document.createElement('p');
p.innerText=inputvalue;

const container=document.getElementById('comment')
container.appendChild(p)
  
document.getElementById('input-field').value=''

})


























