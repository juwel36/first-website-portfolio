// const loadPhone = async (searchText)=>{
// const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
// const data= await res.json();
// const phone=data.data;
// displayPhone(phone);
// }


// const displayPhone=phones =>{
// console.log(phones);
//  const phoneContainer=document.getElementById('phoneContainer')
// phoneContainer.textContent='';


// const showAllContainer = document.getElementById('show-all-container');
// if (phones.length > 5) {
//   showAllContainer.classList.remove('hidden');
// } else {
//   showAllContainer.classList.add('hidden');
// }

// phones=phones.slice(0,5);
//-------------- console.log(phones.length);

// phones.forEach(phone=>{
//   console.log(phone);
// const phoneCard=document.createElement('div')
// phoneCard.classList=`card bg-base-100 shadow-xl`;
// phoneCard.innerHTML=`
// <figure class="px-10 pt-10">
// <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
// </figure>
// <div class="card-body items-center text-center">
// <h2 class="card-title">${phone.phone_name} </h2>
// <p>If a dog chews shoes whose shoes does he choose?</p>
// <div class="card-actions justify-center">
//   <button onclick="handleShowDetails('${phone.slug} ')" class="btn btn-primary">show details</button>
// </div>
// </div>
// `;
// phoneContainer.appendChild(phoneCard)


// })

//--------------- hide loading spinner
// toggleLoadingSpinner(false);
// } 
// modal sec
// const handleShowDetails =async (id)=>{
// console.log("click show details",id);
// loadData
// const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
// const data=await res.json();
// console.log(data);
// }


// const handleSearch =()=>{
  // 
//   toggleLoadingSpinner(true);

// const searchField=document.getElementById('search-field')
// const searchText=searchField.value;
// console.log(searchText);
// loadPhone(searchText);
// }

// const toggleLoadingSpinner =(isLoading)=>{
// const loadingSpinner=document.getElementById('loading-spinner')
// if(isLoading){
//   loadingSpinner.classList.remove('hidden')
// }
// else{
//   loadingSpinner.classList.add('hidden')
// }

// }



//------ loadPhone()