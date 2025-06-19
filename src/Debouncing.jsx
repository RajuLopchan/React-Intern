import React, { useState, useEffect } from 'react';

function SearchBox() {
const [query, setQuery] = useState('');
const [debouncedQuery, setDebouncedQuery] = useState('');

useEffect(() => {
    const timer = setTimeout(() => {
    setDebouncedQuery(query);
    }, 300); // 300ms debounce time

    // If user types again before 300ms, clear previous timer
    return () => clearTimeout(timer);
}, [query]);

useEffect(() => {
    if (debouncedQuery) {
    console.log('Search triggered for:', debouncedQuery);
    }
}, [debouncedQuery]);

return (
    <label htmlFor="">
        Type Anything:
    <input
    type="text"
    placeholder="Type to search..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    />
    </label>
);
}

export default SearchBox;
