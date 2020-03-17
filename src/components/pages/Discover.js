import React, { Component } from "react";
import Footer from "./Footer";
import API from "./API";


class Discover extends Component{
  
  state = {
    result: "",
    matched: false,
    count: 0
  }

  componentDidMount() {
    this.getImage();
  } 

  getImage(){
    API.getRandomDog()
      .then(res => this.setState({ result: res.data.message }))
    //   .then(res => console.log(res))
      .catch(err => console.log(err));

      console.log(this.state);
    
  };

  handleFriendsLike = event => { 
      event.preventDefault();
      let rand = Math.floor(Math.random() * 4);


      if (rand === 1 ){
        alert("You met a good boy!");
        this.setState({count: this.state.count + 1});
        this.getImage();
      }
      else{
        this.getImage();
      }
  }

  handleFriendsDislike = event =>{
      event.preventDefault();
      this.getImage();
  }

  
  render(){
    return (
    <div>
    <div className = "container">
      
      <h1>Meet a friend!</h1>
      <div className = "card">
                <img style = {{height: '400px'}}src = {this.state.result} alt = "pic"></img>
                <button onClick ={this.handleFriendsLike} className = "card-btn pass">Like</button>
                <button onClick ={this.handleFriendsDislike} className = "card=btn pick">Dislike</button>
      </div>
      <h2>Friends made: {this.state.count}</h2>
  
      
    </div>
      <Footer/>
    </div>
  );
  }
}

export default Discover;