
import './App.css'
import Loaddata from './Components/LoadData.jsx/Loaddata'
import Navbar from './Components/Navbar/Navbar'
import Phone from './Components/phone/Phone'
import PriceOptions from './Priceoptions/PriceOptions'
import Chart from './chart/Chart'

function App() {


  return (
    <>
   <Navbar></Navbar>
{/* <Loaddata></Loaddata> */}
      <PriceOptions></PriceOptions>
      <Chart></Chart>
      
   <Phone></Phone>
    </>
  )
}

export default App
