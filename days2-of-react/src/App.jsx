
import './App.css'
import Counter from './Counter'
import Player from './Player'
import Users from './Users'


function App() {
  function normalClick() {
    alert('hi')
  }
  const array = () => {
    alert('hi')
  }

  const addToFInd = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>Explore React</h3>
      <Users></Users>
      <Player></Player>
      <Counter></Counter>
      <button onClick={normalClick}>Normal Click</button>
      <button onClick={array}>Array Click</button>
      <button onClick={()=>addToFInd(3)}>four</button>
    </>
  )
}

export default App
