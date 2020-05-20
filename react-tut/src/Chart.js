import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props) ;
            this.state = {
                error: null,
                isLoaded: false,
                items: []
            }
    }

    componentDidMount() {
        fetch("https://simulatorradio.info/api/comprehensivedata.php", {mode: 'no-cors'})
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render() {
        const {error, isLoaded, items} = this.state;
       if (error) {
           return <div>Error: {error.message}\r\nGot items: {items}</div>;
       } else if (!isLoaded) {
           return <div>Loading...</div>;
       } else {
           return (
               <div>Loaded data! {items}</div>
           )
       }
    }
}


export default Chart


