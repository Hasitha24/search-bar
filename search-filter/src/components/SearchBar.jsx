import React, {useState} from "react";
import {FaSearch} from 'react-icons/fa';
import "./SearchBar.css"

export const SearchBar = () => {
    const [input,setInput] = useState("");

    //below is the method on how to fetch data from the API
    //I have used https://jsonplaceholder.typicode.com/
    const fetchData = (value) => {
fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(json => {console.log(json);
});

//rendering the fetched data

// const results = json.filter((user) => {})
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
  return (
    <div className='input-wrapper'>
    <FaSearch id='search-icon'/>
    <input placeholder="Type here to search.." value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  );
}
