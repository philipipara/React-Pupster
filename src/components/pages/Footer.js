import React from "react";

const footerStyle = {
    backgroundColor: "lightblue",
    height: '50px'
}

function Footer(){
    return(
    <footer style = {footerStyle} className="page-footer font-small teal">
        <div className="footer-copyright text-center py-3">© Pupster
        </div>
    </footer>
    );
}

export default Footer;