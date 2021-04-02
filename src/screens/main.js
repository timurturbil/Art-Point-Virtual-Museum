
import { Component } from "react";
import InputScreen from './InputScreen/InputScreen';
import './main.scss';
class MainScreen extends Component {
    render() {
        return (
            <div>
                <InputScreen LogOut={this.props.LogOut} UserName={this.props.UserName}/>
            </div>

        );
    }
}

export default MainScreen;