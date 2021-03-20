import Dailymotion from 'react-dailymotion';
import { Component } from 'react';

class DailyMotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        fetch(`https://api.dailymotion.com/videos?channel=${this.props.category}&limit=${this.props.fetchedNumber}&search=${this.props.topic}&flags=verified`)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data })
            })
            .catch(error => console.log(error))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            fetch(`https://api.dailymotion.com/videos?channel=${this.props.category}&limit=${this.props.fetchedNumber}&search=${this.props.topic}&flags=verified`)
                .then(response => response.json())
                .then(data => {
                    this.setState({ data: data })
                })
                .catch(error => console.log(error))
        }
    }

    render() {
        return (
            <div className="App" ref={el => (this.div = el)}>
                {this.state.data.list && this.state.data.list.map((item, index) =>
                    <div className="Dailymotion" key={index}>
                        <Dailymotion
                            width="1400px"
                            height="200px"
                            video={item.id}
                            uiTheme="light"
                            autoplay={false}
                            quality="240"
                        />
                        {/* {item.title} */}
                    </div>
                )}
            </div>
        );
    }
}

export default DailyMotion;