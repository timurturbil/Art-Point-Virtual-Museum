import React, { Component } from "react";
import DailyMotion from '../DailyMotion/DailyMotion';
import ImageScreen from "../ImageScreen/ImageScreen";
import './InputScreen.css'
import Pagination from '@material-ui/lab/Pagination';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
class InputScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: {},
            category: "music",
            topic: "Baroque Music",
            fetchedNumber: 1,
            museumData: {},
            pageNumber: 1,
            itemNumber: 24,
            item: {}

        }
    }
    toObjectData = () => {
        const myObject = {"category": this.state.category, "topic": this.state.topic, "fetchedNumber": this.state.fetchedNumber}
        this.setState({
            data: myObject
        })
    }
    changePageNumber = (event, value) => {
        this.setState({pageNumber: value})
        this.handleScrollToStats();
    }
    componentDidMount() {
        this.toObjectData()
        fetch(`https://api.harvardartmuseums.org/Image?apikey=6f510307-f389-4095-b570-1fa9e5c32cd3&size=${this.state.itemNumber}&page=${this.state.pageNumber}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ museumData: data })
            })
            .catch(error => console.log(error))
    }

    componentDidUpdate(prevProps, prevState) {

        if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
            
            fetch(`https://api.harvardartmuseums.org/Image?apikey=6f510307-f389-4095-b570-1fa9e5c32cd3&size=${this.state.itemNumber}&page=${this.state.pageNumber}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({ museumData: data })
                })
                .catch(error => console.log(error))
        }
    }
    handleScrollToStats = () => {
        window.scrollTo({
            top: 0
        })
   }
    
    render(){
        /* console.log(this.state.item) */
        return(
            <div>
                {this.state.data.category && <DailyMotion category={this.state.data.category} topic={this.state.data.topic} fetchedNumber={this.state.data.fetchedNumber}/>}
                {/* Category:   <input type="text" onChange={(event) => this.setState({category: event.target.value})}/> */}
                Şarkı Ismi:  <input type="text" onChange={(event) => this.setState({topic: event.target.value})}/>
                {/* FetchedNumber: <input type="number" onChange={(event) => this.setState({fetchedNumber: event.target.value})}/> */}
                <button onClick={() => this.toObjectData()}>Bas</button>
                Opera Salonuna git<Link to="/OpereSalon">Bas</Link>
                <div>
                {this.state.museumData.records ? this.state.museumData.records[0].baseimageurl ? <ImageScreen museumData={this.state.museumData}/> :"" : ""}
                </div>
                <Pagination count={100} color="primary" page={this.state.pageNumber} onChange={this.changePageNumber} />
            </div>
            
        );
    }
} 

export default InputScreen;