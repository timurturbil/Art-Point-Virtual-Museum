import { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './BigImage.css';
const BigImageScreen = (props) => {

    const { url } = props.location.state;
    return (
        <div>
            <Link to="/">Geri git</Link>
            <img className="myImage" src={url} alt="" />

        </div>
    );

}

export default BigImageScreen;