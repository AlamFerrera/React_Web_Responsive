import React from 'react'
import './button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--ooutline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, OnClick, buttonStyle, buttonSize})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/signUp" className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={OnClick}
                    type={type}>{children}
            </button>
            
        </Link>
    )
}