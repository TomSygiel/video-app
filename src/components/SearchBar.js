import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [ term, setTerm ] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        // Make sure we call callback from parent component
        onFormSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="input-field">Search For a Video</label>
                    <input 
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                        type="text" 
                        name="search" 
                        id="input-field" 
                        placeholder="Search video ..." 
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;