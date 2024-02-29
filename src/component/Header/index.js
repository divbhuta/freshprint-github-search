import React from 'react';
import router from '../../router';
import './Header.css';

export default function Header() {

    const redirectToScreen = (path) => {
        router.navigate(path);
    }

    return <div className="App-header">
        <div onClick={() => redirectToScreen('/')}>Home</div>
        <div onClick={() => redirectToScreen('/history')}>History</div>
    </div>
}