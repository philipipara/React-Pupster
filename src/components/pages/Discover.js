import React, { Component } from "react";
import API from "./API";
// import Card from "../Card";



class Discover extends Component{
  
  state = {
    result: "",
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

    handleFriendsLike = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
      
    })
    alert("You met a good boy!!!");
       this.getImage();

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
        <div>
         
          
                <img style = {{height: "250px"}}src = {this.state.result}></img>  
                <button onClick ={this.handleFriendsLike} className = "card-btn pass">Like</button>
                <button onClick ={this.handleFriendsDislike} className = "card-btn pick">Dislike</button>
               
    
      </div>

      <h2>Friends made: {this.state.count}</h2>
       </div>
      
    </div>
    </div>
  );
  }
}

export default Discover;