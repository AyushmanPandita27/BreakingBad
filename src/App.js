import React, {Component}from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

class App extends Component {
    constructor() {
      super()
      this.state = {
        characters: [],
        searchfield: '',
        key:0
      }
    }
  
    componentDidMount() {
      fetch('https://www.breakingbadapi.com/api/characters/')
        .then(response=> response.json())
        .then(users => {this.setState({ characters: users})});
    }
  
    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value,key: this.state.key+1})
    }
  
    render() {
      var { characters, searchfield } = this.state;
      var filteredcharacters = characters.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return !characters.length ?
        <h1>Loading</h1> :
        (
          <div className='tc'>
            <h1 className='f1'>Breaking Bad Characters</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList key={this.state.key} characters={filteredcharacters} />
            </Scroll>
          </div>
        );
    }
  }
  
  export default App;
