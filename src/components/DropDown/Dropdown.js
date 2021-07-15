import React, { useState, useEffect } from 'react'
import './dropdown.css';

export default function Dropdown(props) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Male', 'Female'];
    const [selected, setSelected] = useState('');

    const handleOptionClick = (event) => {
        setSelected(event.target.innerHTML);

        
        props.onFilterChange(event);
    }
    return (
        <div className="Dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)} tabIndex="1">
                Gender
                <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png" />
            </div>

            <div className="dropdown-content">
                {/* {options.map(option => (
                    <div className="dropdown-item"
                        key={option}
                        onClick={e => handleOptionClick(e)}
                        data-type={props.type}>
                        {option}
                        
                    </div>
                ))} */}

                {options.map(option => (
                    <div className="dropdown-item"
                        key={option}
                        onClick={e => props.setFilter({...props.filter, gender: e.target.innerHTML})}
                        data-type={props.type}>
                        {option}
                    </div>
                ))}

            </div>

        </div>
    )
}
