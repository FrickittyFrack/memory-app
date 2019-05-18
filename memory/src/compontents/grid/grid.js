import React from "react";
import PropTypes from "prop-types";
import Tile from "../tile/tile";

import "./grid.css";

const Grid = ({ tiles, isFlipped, handleClick }) => (
    <div className="grid">
        {tiles.map((tile) => (
            <Tile 
                key={tile.id}
                id={tile.id}
                type={tile.type}
                width={100}
                height={100}
                // isFlipped={isFlipped.includes(tile.id)}
                handleClick={() => handleClick(tile.id)}
            />
        ))}
    </div>
);

export default Grid;

Grid.propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isFlipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired
};
