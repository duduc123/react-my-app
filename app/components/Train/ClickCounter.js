import React, {Component} from 'react';
class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.addClick = this.addClick.bind(this);
        this.reduceClick = this.reduceClick.bind(this);
        this.state = {count:0};
    }
    addClick() {
        this.setState({count: this.state.count + 1});
    }
    reduceClick() {
        this.setState({count: this.state.count -1});
    }
    render() {
        return (
            <div>
                <button onClick={this.addClick}>add</button>
                <button onClick={this.reduceClick}>reduce</button>
                <div>click count: {this.state.count}
                </div>
            </div>
        )
    }
}
export default ClickCounter;