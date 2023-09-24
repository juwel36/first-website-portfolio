// function declaration ------es5
function add(a,b){
// const result=a+b;
// return result;
return a+b   
}
// funtion expresion
const add2=function(a,b){
  return a+b;
}


// arrow function-------------ES6

const add3 =(a,b) => a+b;
const add4=(num1,num2) => num1*num2;

const getAge=person=>person.name;

const student={
  name:"jamal",age:32
}
// console.log(getAge(student));

const getFirstElement=number=>number[1];

// console.log(getFirstElement([2,3,4,5]));


const doMath = (x,y,z)=> {
const sum=x+y+z;
const mult=x*y*z;
const result=sum-mult ;
return result

}



// --------------------------------------------------------------------

// const friends=(23,54,65,90,99);
// const bondu=[23,32,14,87,999];
// // const arrayMax=Math.max(friends)
// const arrayMax=Math.max(...bondu)

// console.log(arrayMax);

// const friends=[23,45,67,86,90];
// const bondu=friends;
// const dusto=[...friends,1111 ]
// old way to add// friends.push(11)

// console.log(dusto);
// console.log(bondu);
// ------------------------------------------------------------------------
const mySelf={
name:'juwel',
phone:'01852592511',
city:'sylhet',
maritialstaus:'single'
}

const {name,city}=mySelf

// console.log(name);
// console.log(city);

// ---------------------------------------------------------------

const juwel ={
name:'juwel',
age:26,
friend:'messsi',
place:'canada'
}

const keys=Object.keys(juwel);
const value=Object.values(juwel)
const both=Object.entries(juwel)
// console.log(both);



// ----------------------------------------------
// homework
// ----------------------------------------------

const arrow=(a,b,c)=>a+b+c;

// console.log(arrow(5,5,5));
const song=`I am a web developer
I love to code.
I love to eat biryani
`
// co

const addParametar = (myValu,other=0)=> myValu+other;

// console.log(addParametar(5));

// const filterEvenLengthNames = (friendsArray) => {
//   const evenLengthNames = friendsArray.filter(name => name.length % 2 === 0);
//   return evenLengthNames;
// };

// const filterEvenLengthNames= friendsArray =>{

//   const evenLengthNames=friendsArray.filter(x=> x.length % 2===0);
// return evenLengthNames

// }


// const friends = ['Alice', 'Bob', 'Charlie', 'Davide', 'Evee', 'Frank'];
// const evenLengthFriends = filterEvenLengthNames(friends);

// console.log(evenLengthFriends);

