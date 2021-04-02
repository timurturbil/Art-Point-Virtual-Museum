import {  useEffect} from "react";
import './ImageScreen.css';
import {
    BrowserRouter as Router,
    Link,
    withRouter,
    useHistory
} from "react-router-dom";
import "aos/dist/aos.css";
import AOS from 'aos';
const ImageScreen = (props) => {
    const history = useHistory();
    const onClickHandler = (item) => {
        history.push({ pathname: "/BigImage", state: { item: item } });
    }
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <Router>
            {props.museumData.records.map((item, index) => {
                return (
                    <div className="majorImage" data-aos="zoom-in-up" key={index}>
                        <div id="piece" >
                            <div id="holder">
                                <div id="painting">
                                    <img className="oneImage"  src={item.baseimageurl} alt="" />
                                </div>
                            </div>
                            <Link to="/BigImage" onClick={() => onClickHandler(item)}>
                                <div id="frame"></div>
                            </Link>
                        </div>
                    </div>
                )
            })
            }
        </Router>


    )



}
export default withRouter(ImageScreen);

