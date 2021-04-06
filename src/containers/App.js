import React, { Component } from 'react';
import List from '../components/List';
import SearchBox from '../components/SearchBox';
//import { robots } from '../components/robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }
    
    //anytime you make your own methods on a component use arrow
    // function syntax
    SearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render() {
        const { robots, searchfield } = this.state;
        const filterFriends = /* this.state. */robots.filter(friends => {
            return friends.name.toLowerCase().includes(/* this.state. */searchfield.toLowerCase())
        })
        if (/* this.state. */robots.length === 0)/* (!robots.length) */ {
            return <h1>Loading</h1>
        } else {
            return (
                // WITHOUT IF ELSE: return !robots.length ? <h1>Loading</h1> : (<div....)

                <div className='tc'>
                        <h1>Friends</h1>
                        <SearchBox search={this.SearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <List robots={filterFriends}/>
                            </ErrorBoundry>
                        </Scroll>
                </div>
            );
        }
    }
}

export default App;

//STATE - the description of the app - an object that describes the app
// and able to change and affect the app 
//(PROPS are things that come out of STATE)