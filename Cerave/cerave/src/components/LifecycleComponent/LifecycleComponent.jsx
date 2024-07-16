// LIFECYCLE OF REACT USING CLASS COMPONENT - 3 types
// - componentDidMount - called once the component is rendered (page load)
// - componentDidUpdate - called when updaated
// - compoenentWillUnmount - for eg from home to about,  home is unmounted and moved to about page



import React, {Component} from 'react'

class LifecycleComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        };
    }

    componentDidMount(){
        console.log('Component did mount');
    }

    componentDidUpdate(preProps, prevState){
        if(prevState.count !== this.state.count){
            console.log('Component did udpate');
        }
    }

    componentWillUnmount(){
        console.log('Component will unmount');
    }

    incrementCount = () => {
        this.setState({count : this.state.count + 1});
    };

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.incrementCount}> Increment </button>
            </div>
        )
    }
}

export default LifecycleComponent;



