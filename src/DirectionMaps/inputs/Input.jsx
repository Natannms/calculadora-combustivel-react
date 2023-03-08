import React from 'react'
import '../index.css'

const Input = ({width, name, id, type, title, className, value, onChange}) => {
    return (
        <div className="input-group group-vertical" style={{ width: width }}>
            <label className="label" htmlFor="origin">{title ? title : ""}</label>
            <input type={type ? type : "text"} name={name ? name : "text"} id={id ?id : "text"} className={className ? className : "input"}  value={value} onChange={onChange}/>
        </div>
    );
}
export default Input; 
