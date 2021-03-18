import { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import DailyMotion from '../DailyMotion/DailyMotion';
class OperaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            category: "music",
            topic: "Phantom of the Opera",
            fetchedNumber: 4,
        }
    }
    toObjectData = () => {
        const myObject = {"category": this.state.category, "topic": this.state.topic, "fetchedNumber": this.state.fetchedNumber}
        this.setState({
            data: myObject
        })
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
    render() {
        return (
            <div>
                <Link to="/">Geri git</Link>
                {this.state.data.category && <DailyMotion category={this.state.data.category} topic={this.state.data.topic} fetchedNumber={this.state.data.fetchedNumber}/>}
                Şarkı ismi:  <input type="text" onChange={(event) => this.setState({topic: event.target.value})}/>
            {/* FetchedNumber: <input type="number" onChange={(event) => this.setState({fetchedNumber: event.target.value})}/> */}
            <button onClick={() => this.toObjectData()}>Bas</button>
            </div>
        );
    }
}

export default OperaScreen;