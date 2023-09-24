document.getElementById('btn-withdraw').addEventListener('click',function(){

const withdrawField=document.getElementById('withdraw-field');
const newwithdrawAmmountString=withdrawField.value ;
const newWithdrawAmmount=parseFloat(newwithdrawAmmountString)

withdrawField.value=''

const withdrawTotalElement=document.getElementById('withdraw-total');
const previousWithdrawTotalString=withdrawTotalElement.innerText;
const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

const newWithdrawTotal= previousWithdrawTotal+newWithdrawAmmount;
withdrawTotalElement.innerText=newWithdrawTotal;

const balanceElement=document.getElementById('balance-total');
const previousBallenceTotalString=balanceElement.innerText ;
const previousBallenceTotal=parseFloat(previousBallenceTotalString);

const newBalanceTotal=previousBallenceTotal-newWithdrawAmmount;

balanceElement.innerText=newBalanceTotal;

})

































// document.getElementById('btn-withdraw').addEventListener('click',function(){

//   const withdrawField=document.getElementById('withdraw-field');
//   const newWithdrawAmmountString=withdrawField.value ;
//   const newWithdrawAmmount=parseFloat(newWithdrawAmmountString);

//   withdrawField.value=''  

//   if(isNaN(newWithdrawAmmount)){
// alert('plese provide number')
// return;
//   }

//   const withdrawTotalAmount=document.getElementById('withdraw-total');
//   const previousWithdrawTotalString=withdrawTotalAmount.innerText ;
//   const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

//   const balanceTotalElement=document.getElementById('balance-total');
//   const previousBallenceTotalString=balanceTotalElement.innerText;
//   const previousBallenceTotal=parseFloat(previousBallenceTotalString);

//   if(newWithdrawAmmount > previousBallenceTotal){
//     alert('tor baper bank ea ato tk nai');
//     return;
//     }

// const currentBallenceTotal=previousBallenceTotal-newWithdrawAmmount;
// balanceTotalElement.innerText=currentBallenceTotal;

// const currentWIthdrawTotal=previousWithdrawTotal+newWithdrawAmmount;
//     withdrawTotalAmount.innerText=currentWIthdrawTotal;



// })










































