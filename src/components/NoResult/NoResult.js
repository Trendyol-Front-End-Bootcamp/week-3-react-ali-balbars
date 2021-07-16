import React from 'react';
import './no-result.css';
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import BackButton from '../ButtonBack/ButtonBack';

export default function NoResult() {
    return (
        <div className="no-result">
            <Header></Header>
            <BackButton></BackButton>
            {/* <Filter></Filter> */}
            no result
        </div>
    )
}
