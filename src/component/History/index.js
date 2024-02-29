import React, { Fragment, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './History.css';

export default function History() {
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('search_history');
        if (data) {
            setSearchHistory(JSON.parse(data));
        }
    }, []);

    const clearSearchHistory = () => {
        setSearchHistory([]);
        localStorage.setItem('search_history', JSON.stringify(''));
    }

    return <div className='History'>
        <div>Your Search History</div>
        {
           searchHistory && searchHistory.length > 0 && 
           <div className='search-history'>
            <div className='item-top'>
            <div>
                Search Term
            </div>
            <div>
                Search Results
            </div>
            </div>
            {searchHistory.map(item => {
                return (
                    <div className='item'>
                    <div>{item.key}</div> 
                    {(item?.data?.message || item.err) ? <Fragment>
                        <div>{item?.data?.message || item.err}</div>
                        <div>{item?.data?.message || item.err}</div>
                        </Fragment>
                    : <Fragment>
                    <img src={item?.data?.avatar_url} className='avatar-search'></img>
                    <div>{item?.data?.name || '--'}</div>
                    </Fragment>}
                    </div>
                )
            })}
           </div>

        }
        <div className='Search-Box-history'>
                    <Button 
                    variant="contained"
                    color="success"
                    onClick={clearSearchHistory} 
                    size="large"
                    >Clear Search History</Button>
        </div>
    </div>
}