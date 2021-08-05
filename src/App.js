import React, { useEffect, useState } from 'react';
import Country from './componants/Country/Country';
import Header from './componants/Header/Header';
import './App.css';
import CountryInfo from './componants/CountryInfo/CountryInfo';

const App = () => {

  const [countries,setCountries] = useState([]);
  console.log(countries);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => error)
  },[])

  const [countryInfo,setCountryInfo] = useState([]);
  const addCountryInfo = (info) => {
    setCountryInfo(info)
  }

  
  // console.log(countries.length)
  return (
    <div>
       <Header country={countries}></Header>
       
       <div className="container-box">
         <div className="country">
           {
              countries.map(country => <Country key={country.alpha2Code} addCountryInfo={addCountryInfo} country={country}></Country>)
           }
         </div>
         <div className="country-info">
            <CountryInfo info ={countryInfo}></CountryInfo>
         </div>
       </div>
    </div>
  );
};

export default App;