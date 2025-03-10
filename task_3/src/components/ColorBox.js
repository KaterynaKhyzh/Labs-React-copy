import React from 'react';
import '../styles/ColorBox.css';

function ColorBox({ color }) {
    const getRandomText = () => {
        const texts = [
            'COPIED!',
            'PASTE IT!',
            'GOT IT!',
            'COLOR IS YOURS!',
            'READY TO PASTE!'
        ];
        return texts[Math.floor(Math.random() * texts.length)];
    };

    return (
        <div className="CopiedAnimation" style={{ backgroundColor: color }}>
            <div className="CopiedText">{getRandomText()}</div>
            <div className="ColorCode">{color}</div>
        </div>
    );
}

export default ColorBox;