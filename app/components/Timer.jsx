var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

	getInitialState: function() {
		return {
			counterStatus: 'stopped',
			counter: 0
		}
	},

	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.counterStatus !== prevState.counterStatus) {
			switch(this.state.counterStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({counter: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},

	componentWillUnmount: function() {
		clearInterval(this.timer);
		this.timer = undefined;
	},

	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.counter + 1;
			this.setState({
				counter: newCount
			})
		}, 1000)
	},

	handleStatusChange: function(newStatus) {
		this.setState({counterStatus: newStatus});
	},
	
	render: function() {	
		var {counter, counterStatus} = this.state;
		var renderControlComponent = () => {
			if(counterStatus !== 'stopped') {
				return <Controls countdownStatus={counterStatus} onStatusChange={this.handleStatusChange}/>
			} else {
				return <Controls countdownStatus="paused" onStatusChange={this.handleStatusChange}/>
			}
		};
		return (
			<div>
				<h1 className="page-title">Timer</h1>
				<Clock totalSeconds={counter}/>
				{renderControlComponent()}
			</div>
		);
	}
});

module.exports = Timer;