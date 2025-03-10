import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import palettes from '../palettes/pallete.json';
import ColorBox from './ColorBox';
import '../styles/Palette.css';
import copySound from '../sounds/src_notify.mp3';

function Palette() {
    const { paletteName } = useParams();
    const palette = palettes.find((p) => p.id === paletteName);
    const [copiedColor, setCopiedColor] = useState(null);
    const [hoveredColor, setHoveredColor] = useState(null);

    if (!palette) {
        return <div>Palette not found</div>;
    }

    const playSound = () => {
        const audio = new Audio(copySound);
        audio.play();
    };

   const handleCopy = (color) => {
        playSound();
        navigator.clipboard.writeText(color);
        setCopiedColor(color);
        setTimeout(() => setCopiedColor(null), 1500);
    };


    return (
        <div className="Palette">
            <div className="PaletteHeader">
                <Link to="/" className="BackButton">
                    ← Back
                </Link>
            </div>
            <div className="ColorBoxes">
                {palette.colors.map((color) => (
                    <div
                        className="ColorBox"
                        key={color.name}
                        style={{ backgroundColor: color.color }}
                        onClick={() => handleCopy(color.color)}
                        onMouseEnter={() => setHoveredColor(color.color)}
                        onMouseLeave={() => setHoveredColor(null)}
                    >
                        <div className="ColorContent">
                            <span className="ColorName">{color.name}</span>
                            {hoveredColor === color.color && <div className="CopyMessage">COPY</div>}
                        </div>
                    </div>
                ))}
            </div>
            {copiedColor && <ColorBox color={copiedColor} />}
        </div>
    );
}

export default Palette;