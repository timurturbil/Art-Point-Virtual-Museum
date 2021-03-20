import { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './BigImage.css';
const BigImageScreen = (props) => {

    //Splash screen
/*     <div class="poster-wrapper">
    <div class="posters-container">
        <InputScreen/>
    </div>
    </div> */
    const { item } = props.location.state;
    console.log(item)
    return (
        <div>
            <Link to="/">Geri git</Link>
            <img className="myImage" src={item.baseimageurl} alt="" />
            <div className="About">
            <div>Name: {item.about.name}</div>
            <div>alphasort: {item.about.alphasort}</div>
            <div>birthplace: {item.about.birthplace}</div>
            <div>culture: {item.about.culture}</div>
            <div>deathplace: {item.about.deathplace}</div>
            <div>gender: {item.about.gender}</div>
            <div>role: {item.about.role}</div>
            </div>
        </div>
    );
}

export default BigImageScreen;