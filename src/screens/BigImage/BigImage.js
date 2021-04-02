import { useEffect } from "react";
import {
    Link
} from "react-router-dom";
import './BigImage.css';
import { BsBoxArrowLeft } from "react-icons/bs";
const BigImageScreen = (props) => {
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    const { item } = props.location.state;
    return (
        <div>
            <Link to="/"><BsBoxArrowLeft size={40} /></Link>
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
                    <img className="card-img" src={item.baseimageurl} alt="" />
                </div>
            </div>
        </div>


    );
}

export default BigImageScreen;