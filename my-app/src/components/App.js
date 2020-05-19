import React from 'react';
import '../scss/App.scss';
import gorillaz from '../gorillaz/gorillaz.js'
import ImageComponent from './ImageComponent.js'
import pickles from '../pickles/characters.js'
class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = gorillaz.results.albummatches.album;
  }

  render() {

    return (
      <div className="app">
        

        <ImageComponent data={this.state}></ImageComponent>
      </div>
    );
  }
};

export default App;
