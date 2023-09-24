
const handleClick =async ()=>{
const response=await fetch('https://openapi.programming-hero.com/api/news/categories')
const data =await response.json();

const isSlice=data.data.news_category
console.log(isSlice);

const tabContainer=document.getElementById('tab-container');


isSlice.forEach((catagory)=>{
  const div=document.createElement('div');
  
  div.innerHTML=`
  <a onclick="handleLoadNews('${catagory.category_id}')" class="tab tab-active"> ${catagory.category_name} </a> 
  `
tabContainer.appendChild(div)

})
}


const handleLoadNews= async (categoryId)=>{
// console.log(categoryId);
const response = await fetch(
  `https://openapi.programming-hero.com/api/news/category/${categoryId}`
);
const data= await response.json();
console.log(data);
catagoryData=data.data.slice(0,5);
// console.log(data.data.slice(0,3));
// console.log(data.data);

const cardContainer=document.getElementById('card-container');
cardContainer.innerHTML = "";

const showallbtn=document.getElementById('showAllContainer');

// card=categoryId.slice(0,4)
// console.log(data.data.slice(0,4));

catagoryData.forEach((news)=>{

  const div=document.createElement('div');
   div.innerHTML=`
  
  
   <div class="card  bg-base-100 shadow-xl">
   <figure class="px-10 pt-10">
     <img src="${news.image_url
     }" />
   </figure>
   <div class="card-body items-center text-center">
     <h2 class="card-title">${news.title
     } </h2>
     <p> ${news.details.slice(0,60)
     } </p>
     <h3> totoal viws: ${
      news.total_view ? news.total_view : "no vviews"
    }</h3>
     <div class="card-actions">
       <button class="btn btn-primary">${"see details"
       }</button>
     </div>
   </div>
 </div>
  
  `
cardContainer.appendChild(div)


})


}



handleClick()
handleLoadNews('01')

