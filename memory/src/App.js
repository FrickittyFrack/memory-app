import React, { Component }from "react";
import Navbar from "./compontents/navbar/navbar";
import Grid from "./compontents/grid/grid";

import shuffleAndDup from "./shuffle";

import "./App.css";

class App extends Component {
  state = { 
    isFlipped: false,
    tiles: shuffleAndDup(),
  };

  // When a tile is clicked...
  handleClick = event => {
    event.preventDefault();
    // const tileId = event.target.id; // The clicked tile ID
    const newFlip = this.state.isFlipped

    if (newFlip === false) {
      this.setState({ 
        isFlipped: true,
        // clickCount: this.state.clickCount + 1
      });
    } else {
      this.setState({
        isFlipped: false
      })
    }
  };

  isCardMatch = (tile1, tile2, tile1Id, tile2Id) => {
    if (tile1 === tile2) {
      const hideTile = this.state.shuffledtile.slice();
      hideTile[tile1Id] = -1;
      hideTile[tile2Id] = -1;
      setTimeout(() => {
        this.setState(prevState => ({
          shuffledtile: hideTile
        }))
      }, 1000);
    } else {
      const flipBack = this.state.isFlipped.slice();
      flipBack[tile1Id] = false;
      flipBack[tile2Id] = false;
      setTimeout(() => {
        this.setState(prevState => ({ isFlipped: flipBack }));
      }, 1000);
    }
  };

  render() {
    return (
     <div>
       <Navbar />
        <div className="grid-container">
          <Grid 
            tiles={this.state.tiles}
            isFlipped={this.state.isFlipped}
            handleClick={this.handleClick}
          />
        </div>
     </div>
    );
  }
}

export default App;


// state = { 
//   isFlipped: Array(16).fill(false), // An array of 16 "false" ie (false, false, false, false, etc.)
//   shuffledTile: App.duplicateTile().sort(() => Math.random() - 0.5), // Takes the 0-7 array, duplicates it, and then sorts it with Math.random
//   clickCount: 1,
//   prevSelectedTile: -1,
//   prevTileId: -1
// };

// // Duplicate all the tiles
// static duplicateTile = () => {
//   return [0, 1, 2, 3, 4, 5, 6, 7].reduce((preValue, current, index, array) => {
//     return preValue.concat([current, current])
//   },[]);
// };

// // When a tile is clicked...
// handleClick = event => {
//   event.preventDefault();
//   const tileId = event.target.id; // The clicked tile ID
//   const newFlip = this.state.isFlipped.slice(); // Redefining the array of tile IDs
//   // Set the state of
//   this.setState({
//       prevSelectedTile: this.state.shuffledTile[tileId],
//       prevTileId: tileId
//   });

//   if (newFlip[tileId] === false) {
//     newFlip[tileId] = !newFlip[tileId];
//     this.setState(prevState => ({ 
//       isFlipped: newFlip,
//       clickCount: this.state.clickCount + 1
//     }));

//     if (this.state.clickCount === 2) {
//       this.setState({ clickCount: 1 });
//       const prevTileId = this.state.prevTileId;
//       const newCard = this.state.shuffledTile[tileId];
//       const previousCard = this.state.prevSelectedTile;

//       this.isCardMatch(previousCard, newCard, prevTileId, tileId);
//     }
//   }
// };

// isCardMatch = (tile1, tile2, tile1Id, tile2Id) => {
//   if (tile1 === tile2) {
//     const hideTile = this.state.shuffledtile.slice();
//     hideTile[tile1Id] = -1;
//     hideTile[tile2Id] = -1;
//     setTimeout(() => {
//       this.setState(prevState => ({
//         shuffledtile: hideTile
//       }))
//     }, 1000);
//   } else {
//     const flipBack = this.state.isFlipped.slice();
//     flipBack[tile1Id] = false;
//     flipBack[tile2Id] = false;
//     setTimeout(() => {
//       this.setState(prevState => ({ isFlipped: flipBack }));
//     }, 1000);
//   }
// };