var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });
    
    describe('handleStatusChange', (done) => {
       it('should set countdown status to started', () => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started')
            expect(timer.state.count).toBe(0);
            expect(timer.state.countdownStatus).toBe('started');
    });
        it('should set countdown status to paused', () => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('stopped')
            
            expect(timer.state.countdownStatus).toBe('paused');
    });
    });
    
    describe('startTimer', (done) => {
        it('should set countdown status to paused', () => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.newCount = 60000;
            
            expect(timer.state.countdownStatus).toBe('paused');
            expect(timer.state.count).toBe(0);
    });  
});
    
});