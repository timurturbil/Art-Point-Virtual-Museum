import React, { Component } from "react";
import DailyMotion from '../DailyMotion/DailyMotion';
import backgroundImage from '../../assets/background-image.jpg';
import ImageScreen from "../ImageScreen/ImageScreen";
import './InputScreen.scss'
import Pagination from '@material-ui/lab/Pagination';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";


class InputScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            category: "music",
            topic: "Baroque Music",
            fetchedNumber: 1,
            museumData: [],
            pageNumber: 1,
            itemNumber: 4,
            imageDetailPage: 20,
            imageDetailNumber: 15,

        }
        /* this.loadData = this.loadData.bind(this); */
    }
    toObjectData = () => {
        const myObject = { "category": this.state.category, "topic": this.state.topic, "fetchedNumber": this.state.fetchedNumber }
        this.setState({
            data: myObject
        })
    }
    changePageNumber = (event, value) => {
        console.log(value)
        this.setState({ pageNumber: value/* , imageDetailPage: ++this.state.imageDetailPage, imageDetailNumber: ++this.state.imageDetailNumber  */ })
        this.handleScrollToStats();
    }

    loadData = () => {
        console.log(this.state.pageNumber)
        fetch(`https://api.harvardartmuseums.org/Image?apikey=6f510307-f389-4095-b570-1fa9e5c32cd3&size=${this.state.itemNumber}&page=${this.state.pageNumber}`)
            .then(response => response.json())
            .then(data => {

                fetch(`https://api.harvardartmuseums.org/Object?apikey=6f510307-f389-4095-b570-1fa9e5c32cd3&size=${this.state.itemNumber}&page=${this.state.pageNumber}`)
                    .then(response => response.json())
                    .then(newData => {
                        /* console.log(newData.records[0].people[0].displayname) */
                        data.records.map((item, index) => {
                            /* console.log(newData.records[index].people[0]) */
                            let myData = newData.records[index].people && newData.records[index].people[0]
                            item['about'] = {
                                "name": myData && myData.displayname,
                                "role": myData && myData.role,
                                "birthplace": myData && myData.birthplace,
                                "gender": myData && myData.gender,
                                "displaydate": myData && myData.displaydate,
                                "culture": myData && myData.culture,
                                "alphasort": myData && myData.alphasort,
                                "name": myData && myData.name,
                                "deathplace": myData && myData.deathplace
                            }
                        })
                        this.setState({ museumData: data })
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }
    componentDidMount() {
        AOS.init({
            // initialise with other settings
            duration: 2000
        });
        this.toObjectData()
        this.loadData()
    }

    componentDidUpdate(prevProps, prevState) {
        AOS.refresh();
        if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
            this.loadData()
        }
    }
    handleScrollToStats = () => {
        window.scrollTo({
            top: 0
        })
    }

    render() {
        return (
            <div>
                <div className="title">
                    <button className="LogOutButton" onClick={this.props.LogOut}>LogOut</button>
                    Welcome to Museum of Art Point {this.props.UserName}
                    <button className="operaButton"><Link to="/OpereSalon" className="operaLink">Opera House</Link></button>
                </div>

                <div className="audio">
                    {this.state.data.category && <DailyMotion width="1350" height="200" category={this.state.data.category} topic={this.state.data.topic} fetchedNumber={this.state.data.fetchedNumber} />}
                    {/* Category:   <input type="text" onChange={(event) => this.setState({category: event.target.value})}/> */}
                    <input type="text" placeholder="Search Song" onChange={(event) => this.setState({ topic: event.target.value })} />
                    {/* FetchedNumber: <input type="number" onChange={(event) => this.setState({fetchedNumber: event.target.value})}/> */}
                    <button className="myButton" onClick={() => this.toObjectData()}>Search</button>
                </div>


                <div className="MainWithBackground" >

                    <div className="Images">
                        {this.state.museumData.records ? <ImageScreen museumData={this.state.museumData} /> : ""}
                    </div>
                </div>


                <Pagination className="pagination" count={300} color="black" size="large" page={this.state.pageNumber} onChange={this.changePageNumber} />
            </div>

        );
    }
}

export default InputScreen;