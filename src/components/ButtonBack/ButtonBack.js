import React from 'react';
import './button-back.css';

export default function BackButton(props) {

    const { gender } = props.character;
    const handleClick = (event) => {
        props.history.goBack();
    }
    return (
        <div className="container">
            <button className="btn-back" onClick={handleClick}>
                <span>
                    <img width="25" src="https://img.icons8.com/ios/50/000000/circled-left-2.png" />
                    Geri Dön
                </span>
            </button>
        </div>
    )
}
