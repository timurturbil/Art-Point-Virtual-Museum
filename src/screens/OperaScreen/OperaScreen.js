import { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import DailyMotion from '../DailyMotion/DailyMotion';
import'./OperaScreen.css';
class OperaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            category: "music",
            topic: "sempre libera, 10) the phantom of the opera",
            fetchedNumber: 1,
            curtainState: "close",
            /* width: 400,
            height: 1350, */
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
                this.setState({ museumData: data, curtainState: "open" })
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
            <div id="starter">
                <div id="scene" className="expand">
                <div id="curtain" className={this.state.curtainState}>
                    <div className="left"></div>
                    <div className="right"></div>
               <div className="mainTools">
               <Link to="/">Geri git</Link>
                {this.state.data.category && <DailyMotion width="1350" height="400" category={this.state.data.category} topic={this.state.data.topic} fetchedNumber={this.state.data.fetchedNumber}/>}
                  <div>
                    <p className="Sarkı">Şarkı ismi</p>
                  <input type="text" onChange={(event) => this.setState({topic: event.target.value})}/>
                  </div>
                {/* FetchedNumber: <input type="number" onChange={(event) => this.setState({fetchedNumber: event.target.value})}/> */}
                <button className="myButton" onClick={() => this.toObjectData()}>Bas</button>
               </div>
            </div>
            </div>
            </div>
        );
    }
}

export default OperaScreen;