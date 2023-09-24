const user = {
id:21,
name:"bahar",
address:{
first: "54/4 uttor kaji tila",
secound: 'proibibr goli',
third:"no dorai"
},
city:"dhaka"

}

console.log(user);// console.log(user.address?.first);
// ------------------------------------------------

const numbers=[23,34,5,76,98];

const output = numbers.map( hi=> hi+1);
// console.log(output);
const name =['josim','karim','bakul begun','juwel'];

const outputt= name.map(num=> num[0]) 
// console.log(outputt);\

// --------------------------------------------

const MyNumber=[77,87,81,93,96,99];
const number=MyNumber.map(num => num + 1)

const sorto =MyNumber.filter(num => num > 90);
const another = name.filter(nam=> nam.length >6 );

const findout=MyNumber.find(num=> num >90) 

// console.log(findout);
// -----------------------------------------------
// try evry thing in here:
// recap

const products = [
{id:1, name:'Iphone' , price : 80000 },
{id:2, name:'Walton' , price : 20000 },
{id:3, name:'Pixel' , price : 90000 },
{id:4, name:'OppO' , price : 99000 },
]

const knowId=products.map(id=> id.price)

// const knowName =products.forEach(i => console.log( i.name))

const knowHIghstPrice= products.filter(x=> x.price<90000);

const knowChepestFirst=products.find(i=> i.price > 81000)

const sum= products.reduce((p,c)=> p+c.price,0 )
// console.log(sum);

// -------------------------------------------------------
// 31-6
class Teacher {
   constructor(name,subject,age){
   this.name=name;
   this.subject=subject;
   this.age=age; 
   }

  lecture(){
console.log('sir is teaching Math')
  }
}

const tapan= new Teacher ('Josim sir', 'English',39 )
// console.log(tapan);

const bokul=new Teacher('bokuul','bangla',18)
// console.log(bokul);
// -------------------------------------------------------
// 31-7

class Vehicle{
constructor(name,price){
this.name=name;
this.Price=price;
}
move(){
  console.log(` bangladesi ${this.name} dam ar koto oibo matro ${this.Price} `);
}
}

class bus extends Vehicle{
constructor(name,price,seat,ticketPrice){
super(name,price);
this.Seat=seat;
this.TicketPrice=ticketPrice

}
}

class truck extends Vehicle{
constructor(name,price,weight){
super(name,price);
this.weight=weight;

}
}

const mlw=new Vehicle('BMW','20000$');
const mlwbd=new bus('BMW','20000$',45,'499$');
const mlwbdd=new truck('honda','32900$',"69ton");
console.log(mlw);
mlw.move();

// console.log(mlwbd);
// console.log(mlwbdd);

// ------------------------------------------------------------
// 31-8










