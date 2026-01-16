import React, { useState } from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`topnav ${isOpen? 'responsive':''}`} id="myTopnav">
            <a href="#home" className="active">Home</a>
            <a href="#news">News</a>
            <a href="#news">Contact</a>
            <a href="#news">About</a>
            <a href="javascript:void(0)" className="icon"
             onClick={(e) =>{
                e.preventDefault(); //prevent default
                setIsOpen(!isOpen);
             }}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}
export default NavBar;
