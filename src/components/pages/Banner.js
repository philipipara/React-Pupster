import React from "react";

const divStyle = {
    color: 'white',
    backgroundImage: 'url(https://secure.img1-fg.wfcdn.com/im/27616071/compr-r85/3125/31254990/dalmatian-puppy-statue.jpg)',
    backgroundSize: 'cover',
    height: '125vh',
};

function Banner(){
    return(
        <div style = {divStyle} className = "jumbotron">
            <h1>Welcome to Pupster 2.0</h1>
            <p>They are the best boys and girls</p>
        </div>
    )
}

export default Banner;