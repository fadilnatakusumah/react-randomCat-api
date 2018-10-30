import React from 'react';

const Searchbox = ({searchChange, searchText}) => {
    return (
        <div className="pa2">
            <input onChange={searchChange} className="pa3 ba b--purple bg-lightest-blue " placeholder='Search here!' type="search"></input>
        </div>
    );
}


export default Searchbox;