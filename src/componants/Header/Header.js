import React from 'react';
import './Header.css';

const Header = (props) => {
   console.log(props.country.length)
    return (
        <div className="header">
           <h2>We Provide Total {props.country.length} Country's Information</h2>
        </div>
    );
};

export default Header;
