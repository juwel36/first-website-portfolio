// let total = 0;

// function handleClickBtn(target) {
//   const selectedItemContainer = document.getElementById("selected-items");
  
//   const itemName = target.parentNode.childNodes[1].innerText;
//   const li = document.createElement("li");
//   li.innerText = itemName;
//   selectedItemContainer.appendChild(li);
  
//   const price = target.parentNode.childNodes[5].innerText.split("\n")[1];
//   total = parseInt(total) + parseInt(price);
  
//   document.getElementById("total").innerText = total;
// }

let total=0;
function handleClickBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");

  const itemName=target.parentNode.childNodes[1].innerText;
 

  const li=document.createElement('li');
li.innerText=itemName;
selectedItemContainer.appendChild(li)



const price=target.parentNode.childNodes[5].innerText.split(' ')[1];
total=parseFloat(price)+total;

const d=document.getElementById('total');
d.innerText=total;
}

// let total = 0;
// const selectedItemContainer = document.getElementById("selected-items");

// function handleClickBtn(target) {
//   const itemName = target.parentNode.childNodes[1].innerText;

//   // Check if the item is already in the list
//   if (!isItemInList(itemName)) {
//     const li = document.createElement('li');
//     li.innerText = itemName;
//     selectedItemContainer.appendChild(li);

//     const price = parseFloat(target.parentNode.childNodes[5].innerText.split(' ')[1]);
//     total += price;

//     const totalElement = document.getElementById('total');
//     totalElement.innerText = total.toFixed(2); // Display total with 2 decimal places
//   }
// }

// function isItemInList(itemName) {
//   const listItems = selectedItemContainer.getElementsByTagName('li');
//   for (const listItem of listItems) {
//     if (listItem.innerText === itemName) {
//       return true;
//     }
//   }
//   return false;
// }















