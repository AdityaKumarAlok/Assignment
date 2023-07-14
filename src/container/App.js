import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      mydata: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2')
      .then(response=> response.json())
      .then(users => {this.setState({ mydata: users.data})});
  }

  searchUpdate = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { mydata, searchfield } = this.state;
    const datafilter = mydata.filter(mydatas =>{
      return mydatas.first_name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !mydata.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <SearchBox searchChange={this.searchUpdate}/>
          
            <CardList mydata={datafilter} />
          
        </div>
      );
  }
}

export default App;