var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
	it('should exist', () => {
		expect(Clock).toExist();
	});

	describe('render', () => {
		it('it should render clock to output', () => {
			var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
			var $el = $(ReactDOM.findDOMNode(clock));
			var actualText = $el.find('.clock-text').text();

			expect(actualText).toBe('01:02');
		});
	});

	describe('formatSeconds', () => {
		it('should format seconds', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			var seconds = 650;
			var expected = '10:50';
			var actual = clock.formatSeconds(seconds);
			
			expect(actual).toBe(expected);
		});

		it('should add 0 when minutes or seconds less than 10', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			var seconds = 9;
			var expected = '00:09';
			var actual = clock.formatSeconds(seconds);
			
			expect(actual).toBe(expected);
		});
	});
});

