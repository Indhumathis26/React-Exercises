import react, { Component } from 'react';
class ToggleMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    toggleMessage = () => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    };
    
    render(){
        return (
            <div>
                <button onClick={this.toggleMessage}>
                    {this.state.isVisible ? 'Hide Component' : 'Show Component'}
                </button>
                {this.state.isVisible && <p>Hi! How are You!!!</p>}
            </div>
        );
    }
}
export default ToggleMessage;
