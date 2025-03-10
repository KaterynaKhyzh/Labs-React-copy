import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import List from './components/PaletteList';
import Palette from './components/Palette';
import './styles/App.css';

function App() {
    const location = useLocation();
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (location.pathname === '/') {
            setAnimationClass('slide-left');
        } else {
            setAnimationClass('slide-right');
        }
    }, [location.pathname]);

    return (
        <div className={`App ${animationClass}`}>
            <Header />
            <Routes location={location}>
                <Route path="/" element={<List />} />
                <Route path="/palette/:paletteName" element={<Palette />} />
            </Routes>
        </div>
    );
}

export default App;