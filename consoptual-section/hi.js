// const arrray =(a,b) => a+b;
// const hi = (a=0,b=0,c=5) => {

// const sum=a+b+c;
// const mainus=a*b*c;
// const plues=sum-mainus;
// return plues
// }

// const student={
//   name:"jamal",age:32
// }

// const faulObject=(person)=>person.name;


// console.log(faulObject(student));

// -------------------------------------------------
// const friends=(23,54,65,90,99);
// const bondu=[23,32,14,87,999];

// const arrray=Math.max(friends)
// const arr=Math.max(...bondu)
// console.log(arr);


const sumon=[32,43,124]
const bokul=[...sumon];

bokul.push(32,9,11)

const juira=[...sumon,...bokul]
// console.log(bokul);
// console.log(sumon);
// console.log(juira);
// --------------------------------------------------------------------------
// const juwel ={
//   name:'juwel',
//   age:26,
//   friend:'messsi',
//   place:'canada'
//   }

  
//   const keys=Object.keys(juwel);
//   const value=Object.values(juwel)
//   const both=Object.entries(juwel)
// // console.log(keys);
// console.log(both);
// --------------------------------------------------------------------------

// const myName="josim"
// const age=32;
// const address="uttora D/32"
// const bouName ="bola jabe na"
// const arrray=['bangla','english']


// const sentance=`
// amr nam ${myName}
// amr boyos ${age}
// amr address oilo ${address}
// amr bour nam ${bouName}
// amr fabourite boi oilo ${arrray.map(sub=>sub).join( " ")}
// `

// console.log(sentance);

// ------------------------------------------------------------------------

const numbers=[23,34,5,76,98];

let mult=[]
const sum=numbers.map(x=>{
total=x+mult
mult.push(total)
return total
})

console.log(sum);
// const name=["jomila",'korima',"sakil",'bokul']

// const mult=[];
// const sum= numbers.map(x=> x+mult);

// console.log(sum);

// const find=numbers.find(x=> x>20)

// const filter= numbers.filter(x=>  x>30)

// const reduice=numbers.reduce((p,c)=> p*c,1)

// console.log(reduice);








