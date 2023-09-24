import { useState } from 'react'
import './App.css'
import Count from './Count'
import Singer from './Singer';
import Post from './Post';

function App() {
  // const [count, setCount] = useState(0)
// ----------------------------
  
  const singers=[
  {name:'',age:'32'},
  {name:'jakir',age:'32'},
  {name:'subroto',age:''}
  ]




// ---------------------------------
  return (
    <>
    <h4>Explore React</h4>
    <Count></Count>
    <Post></Post>
{
singers.map(singer=> <Singer singer={singer}></Singer>)
}

    </>
  )
}

export default App
