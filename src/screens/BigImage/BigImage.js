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
    const { item } = props.location && props.location.state;  
    return (
        <div className="section">
            <div className="container">
                <div className="wrapper">
                    <Link className="link" to="/">Go Back to The Mesuem</Link>
                    <img className="myImage" src={item.baseimageurl} alt="" />
                    <div className="about">
                        <p className="name">{item && item.about.name}</p>
                        <p>alphasort: {item && item.about.alphasort}</p>
                        <p>birthplace: {item && item.about.birthplace}</p>
                        <p>culture: {item && item.about.culture}</p>
                        <p>deathplace: {item && item.about.deathplace}</p>
                        <p>gender: {item && item.about.gender}</p>
                        <p>role: {item && item.about.role}</p>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default BigImageScreen;