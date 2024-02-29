import React, { Fragment, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Home.css';

export default function Home() {
    const [searchedKeyword, setSearchedKeyword] = useState('');
    const [searchResult, setSearchResult] = useState({});

    const inputChange = (e) => {
        e.preventDefault();
        setSearchedKeyword(e.target.value);
    }

    const fetchGithubUser = async () => {
      if (searchedKeyword) {
        let searchHistory = [];
        const history = localStorage.getItem('search_history');
        if (history) {
            searchHistory = [...JSON.parse(history)];
        }
        try {
            const result = await  fetch(`https://api.github.com/users/${searchedKeyword}`);
            const data = await result.json();
            setSearchResult(data);
            searchHistory.push({
                key: searchedKeyword,
                data
            });
        } catch (err) {
            console.error('Error:', err)
            searchHistory.push({
                key: searchedKeyword,
                err: 'Search Result not found'
            });
        } finally {
            localStorage.setItem('search_history', JSON.stringify(searchHistory));
            setSearchedKeyword('');
        }
      }
      
    }

    return <div className='Home'>
        <div>Search Github User</div>
        <div className='Search-Box'>
           <TextField 
           id="outlined-basic" 
           label="Search here" 
           variant="outlined"
           className='input-box'
           value={searchedKeyword}
           onChange={inputChange}/>
           <Button 
           variant="contained"
           color="success"
           onClick={fetchGithubUser} 
           size="large"
           className='btn'
           >Search</Button>
        </div>
        {searchResult && Object.keys(searchResult).length > 0 && <div className='result-box'>
            <div className='header'> 
            Search Results
            </div>
            { searchResult.message ? searchResult.message : <div className='result'>
                <div className='item'>
                 <div>User Image</div> 
                <img src={searchResult.avatar_url} className='avatar-search'></img>
                </div>
                <div className='item'>
                    <div>Github User Name</div> 
                    <div className='name'>{
                        searchResult.name || '--'
                        }</div>
                </div>
            </div>}
            </div>}
    </div>
}