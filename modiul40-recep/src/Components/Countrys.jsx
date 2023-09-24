import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";


const Countrys = () => {

  const [country, setcountry] = useState([])
  const [visitedCountries, setVisitedCountries] = useState([]);
const [visitedFlag,setVisitesFlag]=useState([]);


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setcountry(data))
  }, [])

const handleVisitedFlag = flag=>{
const newVisitedFlag=[...visitedFlag,flag];
setVisitesFlag(newVisitedFlag);

}

  const handleVisitedCountry = country => {
    console.log('add this to your visited country');
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  return (
    <div>

      <div>
        <h5>Visited countries: {visitedCountries.length}</h5>
        <div className="w-20 gap-2">
        {visitedFlag.map((flag, index) =>(<img key={index} src={flag} />
))}
        </div>
        <ul>
          {
            visitedCountries.map(country =>
               <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>

      <h1 className="text-center my-4">All  Countrys in this World</h1>
      <div className="grid grid-cols-3 gap-2">
        {
          country.map(country => <Country key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            country={country}> </Country>)
        }

      </div>
    </div>
  );
};

export default Countrys;