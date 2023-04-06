import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('');

  const fetchData = async (value) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const resutls = data.filter((user) => {
      return user && user.name && user.name.toLowerCase().includes(value);
    });
    setResults(resutls);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input placeholder='Type to Search...' value={input} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};
