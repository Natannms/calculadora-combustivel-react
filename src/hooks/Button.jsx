import React from 'react'  
import './index.css'
const Button = ({title, onClick}) => {  

    return (
        <div className="functional-btn" onClick={onClick}>{title}</div>
    );  

}
export default Button; 
