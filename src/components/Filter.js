import React, { useState } from 'react'
import '../css/filter.css';

export default function Filter(props) {
    return (
        <div className="Filter">
            <form action="">
                <input type="text" onChange={props.onFilterChange}
                placeholder="Character Name" value={props.filter.search}/>
            </form>
        </div>
    )
}