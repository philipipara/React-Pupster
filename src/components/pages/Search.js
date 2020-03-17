import React, { Component } from "react";
import Footer from "./Footer";
import API from "./API";




class Search extends Component{
  
  state = {
      result: "",
      search: ""
  }
  
  componentDidMount() {
    this.searchDog("");
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
    <div>
    <div className = "container">
      
      <h1>Search by Breed</h1>
      <form>
      <input
          type="text"
          placeholder="search"
          name="search"
          value = {this.state.search}
          onChange = {this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Search</button>


      </form>
      <img src = {this.state.result} alt = ".pic"></img>
      
    </div>
        <Footer/>
    </div>
  );
  }
}

export default Search;