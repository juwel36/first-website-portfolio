const loadPhone=async(searchText,ISsHOWALL)=>{
const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
const data= await res.json()
const phones=data.data
// console.log(phones);
displayPhone(phones,ISsHOWALL)
}


const displayPhone=(phones,ISsHOWALL)=>{

  const phoneContainer=document.getElementById('phoneContainer')
phoneContainer.textContent= '';

const showAllContainer = document.getElementById('show-all-container');

if(phones.length>5 && !ISsHOWALL){
  showAllContainer.classList.remove('hidden');
}
else{
  showAllContainer.classList.add('hidden');
}


if(!ISsHOWALL){
  phones=phones.slice(0,5);
}



  phones.forEach(phone=>{
const phoneCard=document.createElement('div');
phoneCard.classList=`card bg-base-100 shadow-xl`;
phoneCard.innerHTML=`
<figure class="px-10 pt-10">
 <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
 </figure>
 <div class="card-body items-center text-center">
 <h2 class="card-title">${phone.phone_name} </h2>
 <p>If a dog chews shoes whose shoes does he choose?</p>
 <div class="card-actions justify-center">
   <button onclick="handleShowDetails('${phone.slug} ')" class="btn btn-primary">show details</button>
 </div>
 </div>
`
phoneContainer.appendChild(phoneCard)
  })
  toggleLoadingSpinner(false)
}

const handleSearch=(ISsHOWALL)=>{
toggleLoadingSpinner(true);
  const  searchField =document.getElementById('search-field')  
  const searchText=searchField.value ;

  loadPhone(searchText,ISsHOWALL)
}


// loaddding ssecttion
const toggleLoadingSpinner =(isLoading)=>{
  const loadingSpinner=document.getElementById('loading-spinner')
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
  


  }


const handleShowAll=()=>{
handleSearch(true);

}




























