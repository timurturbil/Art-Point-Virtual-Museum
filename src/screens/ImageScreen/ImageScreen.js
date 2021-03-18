import { Component } from "react";
import './ImageScreen.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    useHistory 
} from "react-router-dom";
const ImageScreen = (props) => {
    const history = useHistory();
    const onClickHandler = (ImageUrl) => {
        history.push({ pathname: "/BigImage", state: { url: ImageUrl } });
    }
    return (
        <Router>
            {props.museumData.records.map((item, index) => {
                return (
                    <div className="majorImage">
                        <div id="piece" >
                            <div id="holder">
                                <div id="painting">
                                    <img className="oneImage" src={props.museumData.records[index].baseimageurl} alt="" />
                                </div>
                            </div>
                            <Link to="/BigImage" onClick={() => onClickHandler(props.museumData.records[index].baseimageurl)}>
                                <div id="frame"></div>
                            </Link>
                        </div>
                    </div>
                )
            }
            )
            }
        </Router>


    )



}
export default withRouter(ImageScreen);

