import React, { useState } from 'react'
import './searchbar.css'

function SearchBar() {
    
    const data = ["Maths", "Physique", "Informatique", "Internet", "Phillosophie"];
    const [value, satValue] = useState("")
    
    function handleChange(e) {
        satValue(e.target.value)
    }

  return (
    <div className='searchBar'>
        <div className='inputSearch'>
            <input type='text' value={value} onChange={handleChange}/>
            <button>
                <span className='material-symbols-outlined'>Search</span>
            </button>
        </div>
        <ul>
            {
                data.map((element, index) => <li key={index}>{element}</li>)
            }
        </ul>
    </div>
  )
}

export default SearchBar