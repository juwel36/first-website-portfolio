
document.getElementById('btn-deposit').addEventListener('click',function(){

 const newDepositAmount= getInputFieldId('deposite-field') ;
 const previousDeposite=getElementById ('deposite-total')

const totalDeposite=previousDeposite+newDepositAmount;
setTextElementValueById ('deposite-total',totalDeposite);

const previousDepositeBallence=getElementById ('balance-total');
const depositeBallenceTotal=previousDepositeBallence+newDepositAmount;
setTextElementValueById('balance-total',depositeBallenceTotal);

})




























// document.getElementById('btn-deposit').addEventListener('click',function(){

// const newDepositAmount = getInputFieldValueById('deposite-field');
// const previousDepositTotal=getTextElementValueById('deposite-total')

// const newDepositTotal=previousDepositTotal+newDepositAmount;
// setTextElementValueById('deposite-total',newDepositTotal)

// const previousdepositTotal=getTextElementValueById('balance-total');
// const depositeTotal= previousdepositTotal+newDepositAmount;

// setTextElementValueById('balance-total',depositeTotal);

// })
































// document.getElementById('btn-deposit').addEventListener('click', function () {

//   const newDepositAmount = getInputFieldValueById('deposite-field');

//   const previousDepositTotal = getTextElementValueById('deposite-total');

//   const newDepositTotal = previousDepositTotal + newDepositAmount;
//   setTextElementValueById('deposite-total', newDepositTotal);

//   const previousBalanceTotal = getTextElementValueById('balance-total');
  
//   const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//   setTextElementValueById('balance-total', newBalanceTotal);
// });
