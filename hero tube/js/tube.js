
const handleClick = async()=>{
const response= await fetch('https://openapi.programming-hero.com/api/videos/categories')
const data= await response.json();
const tabContainer=document.getElementById('tab-Container')

data.data.forEach((catagory)=>{
const div=document.createElement('div');
div.innerHTML=`

<a onclick="handleLoadVideos('${catagory.category_id}')" class="tab hover:bg-red-400  bg-gray-300 rounded-sm text-black m-1 "> ${catagory.category} </a> 
`
tabContainer.appendChild(div)

})

}

let currentSortOrder = '0'; 

const shortView = () => {
  currentSortOrder = currentSortOrder === '0';
  const cardContainer = document.getElementById('card-container');
  const videos = Array.from(cardContainer.querySelectorAll('.card'));

  videos.sort((a, b) => {
    const viewsA = parseInt(a.querySelector('.views-count').textContent);
    const viewsB = parseInt(b.querySelector('.views-count').textContent);

    if (currentSortOrder === '0') {
      return viewsA - viewsB;
    } else {
      return viewsB - viewsA;
    }
  });

  cardContainer.innerHTML = '';

  videos.forEach((video) => {
    cardContainer.appendChild(video);
  });
};







const handleLoadVideos = async (catagoryId)=>{
const response= await fetch(` https://openapi.programming-hero.com/api/videos/category/${catagoryId}`)
const data=await response.json();



// const viewContant=document.getElementById('views-section')
const errordiv=document.getElementById('error-container')
const cardContainer=document.getElementById('card-container');

 
cardContainer.innerHTML = "";



if (data.data.length === 0) {
  errordiv.classList.remove('hidden');
} else {
  errordiv.classList.add('hidden');


data.data.forEach((videos)=>{

const div=document.createElement('div')


const postedDate = new Date(videos.others.posted_date ? videos.others.posted_date * 1000 : "");
const currentTime = new Date();
const timeDifference = Math.floor((currentTime - postedDate) / (60 * 1000));
const hours = Math.floor(timeDifference / 60); 
const minutes = timeDifference % 60; 




div.innerHTML=`

<div class="card bg-base-100 shadow-xl p-2 relative">
<figure><img class="h-52" src="${videos.thumbnail
} " alt="thumblin" /></figure>

<div class="flex gap-3 mt-2 ml-1  items-center">
<div>
  <img class="w-14 h-14 rounded-full" src="${videos.authors[0].profile_picture}" alt="">
</div>
<div>
  <h1 class="font-bold text-xl">${videos.title} </h1>
</div>
    </div>
    <div  class="views-section absolute h-5  bg-black bottom-32 left-72 md:left-28 lg:left-52 rounded-md " ><h1 class="text-[8px] py-1 text-white">${hours ? hours + " hrs ":"" } ${minutes ? minutes + " min ago " : ""}</h1> </div>

    <div class="flex items-center gap-4 ml-16">
<div><p>${videos.authors[0].profile_name} </p></div>

<div><p>  ${videos.authors[0].verified
  ? `<svg width="16" height="16" viewBox="0 0 16 16"><path fill="blue" d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-2.04 11.854l-2.3-2.298 1.06-1.06 1.24 1.24 4.48-4.478 1.06 1.06-5.54 5.536z"/></svg>`
  : ''
}</p></div>

    </div>
    <p class="pl-16 views-count">${videos.others.views} views</p>

    </div>

</div>


`
cardContainer.appendChild(div)


})

}
}


handleClick()
handleLoadVideos('1000')










// add html file
const blogButton = document.getElementById("blog-file");

blogButton.addEventListener("click", function() {
  const newWindow = window.open("answer.html", "");  

});














