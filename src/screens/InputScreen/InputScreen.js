import React, { Component } from "react";
import DailyMotion from '../DailyMotion/DailyMotion';
import ImageScreen from "../ImageScreen/ImageScreen";
import './InputScreen.css'
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
            itemNumber: 24,

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
        this.setState({ pageNumber: value })
        this.handleScrollToStats();
    }

    loadData = () => {
        fetch(`https://api.harvardartmuseums.org/Image?apikey=6f510307-f389-4095-b570-1fa9e5c32cd3&size=${this.state.itemNumber}&page=${this.state.pageNumber}`)
            .then(response => response.json())
            .then(data => {

                fetch(`https://api.harvardartmuseums.org/Object?apikey=6f510307-f389-4095-b570-1fa9e5c32cd3&size=${this.state.itemNumber}&page=${this.state.pageNumber}`)
                    .then(response => response.json())
                    .then(newData => {
                        /* console.log(newData.records[0].people[0].displayname) */
                        data.records.map((item, index) => {
                            let myData = newData.records[index].people[0]
                            item['about'] = { "name": myData.displayname, "role": myData.role, "birthplace": myData.birthplace, "gender": myData.gender, "displaydate": myData.displaydate, "culture": myData.culture, "alphasort": myData.alphasort, "name": myData.name, "deathplace": myData.deathplace }
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
                {this.state.data.category && <DailyMotion category={this.state.data.category} topic={this.state.data.topic} fetchedNumber={this.state.data.fetchedNumber} />}
                {/* Category:   <input type="text" onChange={(event) => this.setState({category: event.target.value})}/> */}
                Şarkı Ismi:  <input type="text" onChange={(event) => this.setState({ topic: event.target.value })} />
                {/* FetchedNumber: <input type="number" onChange={(event) => this.setState({fetchedNumber: event.target.value})}/> */}
                <button className="myButton" onClick={() => this.toObjectData()}>Bas</button>
                <br/>
                Opera Salonuna git: <Link to="/OpereSalon">Bas</Link>
                <div className="Images" data-aos="fade-down">
                    {this.state.museumData.records ? <ImageScreen museumData={this.state.museumData} /> : ""}
                </div>
                <Pagination count={100} color="primary" page={this.state.pageNumber} onChange={this.changePageNumber} />
            </div>

        );
    }
}

export default InputScreen;