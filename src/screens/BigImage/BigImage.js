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
        <div className="card-container">
            <div className="card u-clearfix">
                <div className="card-body">
                    <span className="card-number card-circle subtle"></span>
                    <span className="card-author subtle">{item.about.birthplace}</span>
                    <h2 className="card-title">{item.about.name}</h2>
                    <span className="card-description subtle"></span>
                    <div className="card-read">{item.about.culture}</div>
                </div>
            </div>
            <div className="card-shadow" />
            <div className="card-img-wrapper">
                <img className="card-img" src={item.baseimageurl} alt=""/>
            </div>
        </div>

       
    );
}

export default BigImageScreen;