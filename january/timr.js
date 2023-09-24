let timerInterval;
let isRunning = false;



const timerElement=document.getElementById('timer')

const startBtn=()=>{
  let number = 0;

  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      number++;
      timerElement.innerText = number; // Use timerElement instead of timer
    }, 1000);

}
};

const stopBtn=()=>{

    if (isRunning) {
      isRunning = false;
      clearInterval(timerInterval);
    
  }
}

// timer.innerText=number;


// Declare a variable to store the timer interval
// let timerInterval;

// const timer = document.getElementById('timer');

// const startBtn = () => {
//   let number = 0;

//   timerInterval = setInterval(() => {
//     number++;
//     timer.innerText = number; // Update the displayed timer value
//   }, 1000);
// };

