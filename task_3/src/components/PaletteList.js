import React from 'react';
import { Link } from 'react-router-dom';
import palettes from '../palettes/pallete.json';
import '../styles/PaletteList.css';

function PaletteList() {
    return (
        <div className="PaletteListContainer">
            <div className="PaletteList">
                {palettes.map((palette, index) => (
                    <Link to={`/palette/${palette.id}`} key={palette.id} className="PaletteLink">
                        <div className="PaletteListItem">
                            <div className="PaletteColors">
                                {palette.colors.map((color, colorIndex) => (
                                    <div key={colorIndex} className="PaletteColor" style={{ backgroundColor: color.color }}></div>
                                ))}
                            </div>
                            <div className="PaletteInfo">
                                <span className="PaletteName">{palette.paletteName}</span>
                                <span className="PaletteEmoji">{palette.emoji}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PaletteList;