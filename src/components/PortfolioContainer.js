import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Search from "./pages/Search";
import Discover from "./pages/Discover";
import "../util/App.css"
import "../util/index.css"



class PortfolioContainer extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if(this.state.currentPage === "Search"){
      return <Search />;
    }else{
      return <Discover />;
    }
    

  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
       {this.renderPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
