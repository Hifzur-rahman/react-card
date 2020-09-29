import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.components';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state={
      program:[],
      searchField: '' 
    };

    this.handleChange = this.handleChange.bind(this);
  }



 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ program: users})); 
  }


  handleChange(e){
    this.setState({searchField: (e.target.value)})
  }

  render(){

    // Filter method searchField

    const { program, searchField }  = this.state;
    const filteredProgram = program.filter(program =>
      program.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(

          <div>

            <SearchBox 
            placeholder='search Course'
            handleChange={this.handleChange}

            />
          
            <CardList program={filteredProgram} /> 

           
          </div>   

    )
  }
}



export default App;
