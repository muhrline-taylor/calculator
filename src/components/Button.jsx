import React from 'react';
import "../static/css/Button.css";

const Button = ({ value, onClick }) => {
    return (
        <div 
            className="button"
            style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
            }}
            onClick={onClick}
        >
            <p>{value}</p>
        </div>
    )
}

export default Button
