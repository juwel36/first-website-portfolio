  
// let countOl = 1;
// let total=0;
// let discount = 0;
// function handleClick(target) {
//   const selectItemContainer = document.getElementById('item-container');
//   const itemName = target.querySelector('.card-title').innerText;
//   const ol = document.createElement('ol');
//   const li = document.createElement('li');

//   li.classList.add('font-semibold')
//   li.classList.add('mb-3')
//   li.classList.add('text-lg')
//   li.innerText =`${countOl}.  ${itemName}`;
//   countOl++; 
//   ol.appendChild(li);
//   selectItemContainer.appendChild(ol);

// const totalPrice=target.childNodes[3].childNodes[5].innerText.split(' ')[0];
// total=parseFloat(totalPrice)+total;
// const totalMoney=document.getElementById('total-price');
// totalMoney.innerText=total.toFixed(2);
// }


// const totalPriceSpan = document.getElementById("total-price");
// totalPriceSpan.addEventListener("DOMSubtreeModified", function () {
  
//   const totalPrice = parseFloat(totalPriceSpan.innerText);
//   if (totalPrice >= 200) {
//     applyButton.removeAttribute("disabled");
//   } else {
//     applyButton.setAttribute("disabled", "disabled");
//   }

// const purchaseButton = document.getElementById('Purchase-btn');
// if (totalPrice > 0) {
//       purchaseButton.removeAttribute("disabled");
//     } else {
//       purchaseButton.setAttribute("disabled", "disabled");
//     }
// });


// const applyButton = document.getElementById('apply-btn');
// applyButton.addEventListener('click', function(){
//   const couponCode = document.getElementById('input-cupon');
//   const couponCodeValue=couponCode.value ;
//   if (couponCodeValue === 'SELL200') {
//     discount = total * 0.2; 
//   } else {
//     discount = 0;
//   }

//   const discountPrice = document.getElementById('discount-price');
//   discountPrice.innerText = discount.toFixed(2);

//   const finalTotal = total - discount;
//   const finalTotalOutput = document.getElementById('final-total');
//   finalTotalOutput.innerText = finalTotal.toFixed(2);
  
// });






