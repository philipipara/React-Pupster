import React, { Component } from "react";
import API from "./API";




class Search extends Component{
  
  state = {
      result: "",
      search: ""
  }
  


  searchDog(query){
    API.getDogByBreed(query)
      .then(res => this.setState({ result: res.data.message}))
      .catch(err => console.log(err));
  }
  
  handleInputChange = event =>{
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]:value
    });
  }

  handleFormSubmit = event =>{
    event.preventDefault();  
    this.searchDog(this.state.search);
  }
  

  render(){
    return (
    
    <div className = "container">
      
      <h1>Search by Breed</h1>
      <form>
      <input
          type="text"
          placeholder="search for a good boy"
          name="search"
          value = {this.state.search}
          onChange = {this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Search</button>


      </form>
      <img src = {this.state.result} alt = ""></img>
      
    </div>
  
  );
  }
}

export default Search;