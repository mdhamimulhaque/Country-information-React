import React from 'react';
import './CountryInfo.css';

const CountryInfo = (props) => {
    console.log("props info",props.info)
    const{flag,name,area,borders,callingCodes,capital,population,region,timezones,topLevelDomain,currencies,languages} = props.info;
    
    console.log("borders", borders)
    // console.log(currencies)
    
    return (
        <div className="info-box">       
            <img src={flag} alt="" />
            <h3>Country's Information</h3>
            <h5><span className="text">Name : </span> <span className="name">{name}</span> </h5>
            <h6><span className="text">Area : </span>{area}</h6>
            <h6><span className="text">Borders : </span>{" " + borders} </h6>
            <h6><span className="text">Calling Codes : </span>{callingCodes}</h6>
            <h6><span className="text">Capital : </span>{capital}</h6>
            <h6><span className="text">Region : </span>{region}</h6>
            <h6><span className="text">Population : </span>{population}</h6>
            {/* <h6>
                <span className="text">Currencies :</span> {currencies[0].name}
                 ({currencies[0].symbol})
            </h6>
            <h6>
                <span className="text">Language : </span>{languages[0].name}
                <span className="text"><small>Native-Name: {languages[0].nativeName}</small></span>
            </h6> */}
            <h6><span className="text">Time-zones : </span>{timezones}</h6>
            <h6><span className="text">Top Level Domain : </span>{topLevelDomain}</h6>
            <h6><span className="text">Calling Codes : </span>{callingCodes}</h6>
        </div>
    );
};

export default CountryInfo;