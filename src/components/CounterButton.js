import React, {Component} from 'react';

class CounterButton extends Component {
	constructor(props){
		super(props);
		this.state={
			count: 0
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true
	}

	updateCount = () => {
		this.setState({count: this.state.count+1})
	}

	render() {
		return(
		<button
		id="counter"
		 color={this.props.color}
			onClick = {this.updateCount}
		>Button: {this.state.count}</button>
		)
	}
}

export default CounterButton