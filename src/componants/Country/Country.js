import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country)
const{name,flag} = props.country;
const addCountryInfo = props.addCountryInfo;
    return (
        <div className="container">
           <div className="country">
              <div className="country-box">
                  <img src={flag} alt="" />
                  <h4>Name : {name}</h4>
                  <button onClick={()=>addCountryInfo(props.country)}>Read Information</button>
              </div>
           </div>
        </div>
    );
};

export default Country;