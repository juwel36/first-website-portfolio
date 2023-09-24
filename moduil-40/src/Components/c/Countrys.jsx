import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import './c.css'

const Countrys = () => {

const [countries,setcountrys]=useState([])

useEffect(()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>setcountrys(data))
},[])

  return (
    <div className="country-container">
      <h3>* {countries.length} Countrys in this world *</h3>
      {
        countries.map(country=> <Country key={country.cca3} country={country}></Country>)
      }
    </div>
  );
};

export default Countrys;


