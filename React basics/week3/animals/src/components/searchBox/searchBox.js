import React from 'react';

const SearchBox = (props) => {
    return (
        <div>
            <input type="text" onChange={props.search} placeholder="Find animals"/>
        </div>
    );
};

export default SearchBox;