import React, { useState } from 'react';
import Dropdown from '../DropDown/Dropdown.js';

import './filter.css';

export default function Filter(props) {
    return (
        <div className="Filter">
            <form action="">
                {/* <input type="text" onChange={props.onFilterChange}
                placeholder="Character Name" value={props.filter.search}
                data-type={props.type}/> */}
                <input type="text" onChange={e => props.setFilter({search: e.target.value})}
                placeholder="Character Name" value={props.filter.search}
                data-type={props.type}/>

                <Dropdown filter={props.filter} setFilter={props.setFilter} type="gender"/>

                {/* {props.children} */}
            </form>
        </div>
    )
}