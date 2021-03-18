import { Component } from "react";
import InputScreen from './InputScreen/InputScreen'; 
import './main.scss';
/* var mb = require('musicbrainz');
var redis = require('redis'); */
class MainScreen extends Component{
    render(){
          
        return(
            <div>
            <div class="poster-wrapper">
            <div class="posters-container">
                <InputScreen/>
            </div>
            </div>

            </div>

        );
    }
}

export default MainScreen;