import React from 'react';
import '../scss/App.scss';
import gorillaz from '../gorillaz/gorillaz.js'
import GorillazComponent from './GorillazComponent.js'
import pickles from '../pickles/characters.js'
import  RicksComponent from './RicksComponent.js'
import books from '../books/books.js'
import BooksComponent from './BooksComponent'

class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = gorillaz.results.albummatches.album;
    this.state2 = pickles.results;
    this.state3 = books.results.lists[0]['books'];
  }

  render() {

    return (
      
      <div className="app">
        <GorillazComponent data={this.state}></GorillazComponent>
        <RicksComponent rick= {this.state2}></RicksComponent>
        <BooksComponent books= {this.state3}></BooksComponent>

      </div>
    );
  }
};

export default App;
