import React from 'react';

const SearchBox = ({search}) => {
//we are using DESTRUCTURING ({...}) - allows us to grab
//the props object and grab its properties
    return (
        <div className='pa2'>
            <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search friends' 
            onChange={search}
            />
        </div>
    );
}

export default SearchBox;