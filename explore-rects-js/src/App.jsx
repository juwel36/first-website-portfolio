import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from './todo'
// import Actor from './Actor'
import Singer from './Singer'


function App() {

  const actors=['sakib','raj','salman'];

const singers=[
{name:'mafguj',age:'32'},
{name:'jakir',age:'32'},
{name:'subroto',age:'33'}
]

  return (
    <>
      <h1>Vite + React</h1>
{
  // actors.map(actor=> <Actor name ={ actor}></Actor>)
}
{
singers.map(singer=> <Singer singer={singer}></Singer>)
}
      {/* <Todo task='learn react' isDone={true}></Todo>
      <Todo task='Core Concept' isDone={false}></Todo>
      <Todo task='try jsx' isDone={true}></Todo> */}
{/* <Device name="leptop" price="80k" ></Device>
<Device name="mobile" price="40k"></Device>
<Device name="camera" price="100k"></Device>
  <Person></Person>
  <Student grade='7' score='89'></Student>
  <Student grade='12' score='78'></Student>
  <Student></Student> */}
    </>
  )
}

function Device(props){
  return <h2>This device:{props.name} Price:{props.price}</h2>
}

function Person (){
const Person={
name:"juwel",
age:69
}
const money=100;
const vat=" with 10% vat"
const develop={
  border:'2px solid purple',
  padding:'5px'
}
return <h3 style={develop}>I am {Person.name} my age {Person.age} I have {money + vat}  </h3>
}

function Student({grade=2,score=0}){
return(
<div className='Student'>
<h3>This is a student</h3>
<p>Grade:{grade}</p>
<p>Score: {score} </p>

</div>

)

}


export default App
