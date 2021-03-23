
import { Component } from "react";
import InputScreen from './InputScreen/InputScreen';
import './main.scss';
import $ from 'jquery';
class MainScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <InputScreen LogOut={this.props.LogOut} UserName={this.props.UserName}/>
            </div>

        );
    }
}

export default MainScreen;