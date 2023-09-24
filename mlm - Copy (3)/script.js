
let total=0;
function handleClick (target){

const newElement =document.getElementById('item-container');
const itemName=target.querySelector('.card-title').innerText;

const count=newElement.childElementCount;


const p=document.createElement('p');
p.classList.add('font-semibold')

p.innerHTML=`${count +1}.${itemName}`
newElement.appendChild(p)

const priceList=target.childNodes[3].childNodes[5].innerText.split(' ')[0];
total=parseFloat(priceList)+total;

 const totalPrice=document.getElementById('total-price');
 totalPrice.innerText=total;

}

const totalPriceSpan = document.getElementById("total-price");
totalPriceSpan.addEventListener("DOMSubtreeModified", function (){

  if(totalPrice>=200){
applyButton.removeAttribute("disabled")
  } else {
        applyButton.setAttribute("disabled", "disabled");
      }

}






  










