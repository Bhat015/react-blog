import React from 'react'
import "./styles.css"

const SearchBar = ({value,handlesearchKey,clearSearch,formSubmit}) =>  (
    <div className='searchBar-wrap'>
        <form onSubmit={formSubmit}>
            <input type="text" onChange={handlesearchKey} placeholder='Search' value={value}/>
            {value && <span onClick={clearSearch}></span>}

            <button>Go</button>
        </form>
      
    </div>
  );


export default SearchBar
