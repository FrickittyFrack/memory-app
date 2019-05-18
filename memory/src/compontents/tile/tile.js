import React from "react";
import ReactCardFlip from "react-card-flip";
import PropTypes from "prop-types";

import "./tile.css";

const Tile = ({ id, isFlipped, handleClick, height, width }) => (
    <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
        <div id="shell" className={`tile ${isFlipped ? "" : "hide-tile"}`} onClick={handleClick} key="front">
            <img className="shell-img" alt="shell" src={require("../../images/Turtle-Shell.png")} />
        </div>
        <div id={id} className={`tile ${isFlipped ? "" : "hide-tile"}`} onClick={handleClick} key="back">
            <img style={{ height, width }} className="flipped-img" alt="flipped" src={isFlipped} />
        </div>
    </ReactCardFlip>
);

export default Tile;

Tile.propTypes = {
    id: PropTypes.number.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
}


// const Tile = ({ id, isFlipped, handleClick, height, width }) => (
//     <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
//         <div id="shell" className={`tile ${tileNumber !== -1 ? "" : "hide-tile"}`} onClick={handleClick} key="front">
//             <img className="shell-img" alt="shell" src={require("../../images/Turtle-Shell.png")} />
//         </div>
//         <div id={id} className={`tile ${tileNumber !== -1 ? "" : "hide-tile"}`} onClick={handleClick} key="back">
//             <img className="flipped-img" alt="flipped" src={require("../../images/" + {img})} />
//         </div>
//     </ReactCardFlip>
// );
