var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('should exists', () => {
		expect(Timer).toExist();
	});

	it('should start timer on started status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);
		
		expect(timer.state.counter).toBe(0);
		
		timer.handleStatusChange('started');
		
		expect(timer.state.counterStatus).toBe('started');
		setTimeout(() => {
			expect(timer.state.counter).toBe(1);
			done();
		}, 1001);
	});

	it('should pause timer on paused status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);
		
		timer.state.counter = 2;
		timer.handleStatusChange('paused');
	
		expect(timer.state.counterStatus).toBe('paused');
		setTimeout(() => {
			expect(timer.state.counter).toBe(2);
			done();
		}, 1001);
	});

	it('should stop timer and set counter to ZERO on stopped status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);
		
		timer.state.counter = 2;
		timer.handleStatusChange('started');
		timer.handleStatusChange('stopped');
	
		expect(timer.state.counterStatus).toBe('stopped');
		setTimeout(() => {
			expect(timer.state.counter).toBe(0);
			done();
		}, 1001);
	});

});