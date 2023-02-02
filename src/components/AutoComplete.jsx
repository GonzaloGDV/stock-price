import { useState, useEffect } from 'react';
import finnHub from '../apis/finnHub';

const AutoComplete = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const renderDropdown = () => {
    const dropDownClass = search ? 'show' : null;
    return (
      <ul
        style={{
          height: '500px',
          overflowY: 'scroll',
          overflowX: 'hidden',
          cursor: 'pointer',
        }}
        className={`dropdown-menu ${dropDownClass}`}
      >
        {results.map((result) => {
          return (
            <li key={result.symbol} className='dropdown-item'>
              {result.description} ({result.symbol})
            </li>
          );
        })}
      </ul>
    );
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub('/search', {
          params: {
            q: search,
          },
        });
        if (isMounted) {
          setResults(response.data.result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (search.length > 0) {
      fetchData();
    } else {
      setResults([]);
    }

    return () => (isMounted = false);
  }, [search]);

  return (
    <div className='w-50 p-5 mx-auto'>
      <div className='form-floating dropdown'>
        <input
          style={{ backgroundColor: 'rgba(145,158,171, 0.04)' }}
          id='search'
          type='text'
          className='form-control'
          placeholder='Search'
          autoComplete='off'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor='search'>Search</label>
        {renderDropdown()}
        {/* <ul className='dropdown-menu'>
          <li>stock1</li>
          <li>stock2</li>
          <li>stock3</li>
        </ul> */}
      </div>
    </div>
  );
};

export default AutoComplete;
