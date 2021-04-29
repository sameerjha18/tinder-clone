import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import TinderIcon from "./tinder.png";

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img className="header_logo" src={TinderIcon} alt= ""></img>
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}

export default Header
