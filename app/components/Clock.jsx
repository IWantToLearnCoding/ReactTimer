var React = require('react');

var Clock = React.createClass({

	getDefaultProps: function () {
		totalSeconds: 0
	},

	propTypes: {
		totalSeconds: React.PropTypes.number
	},

	formatSeconds: function(totalSeconds) {
		var seconds = totalSeconds % 60;
		seconds = seconds > 9 ? seconds : '0' + seconds; 
		var	minutes = Math.floor(totalSeconds / 60);
		minutes = minutes > 9 ? minutes : '0' + minutes;
		
		return minutes + ':' + seconds;
	},

	render: function() {
		var {totalSeconds} = this.props;

		return (
			<div className="clock">
				<span className="clock-text">
					{this.formatSeconds(totalSeconds)}
				</span>
			</div>
		);
	}
});

module.exports = Clock;