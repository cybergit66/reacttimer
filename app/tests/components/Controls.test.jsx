var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls')

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });
    
    describe('render', () => {
        it('should render pause when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            // assert output rendered to the screen
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');
            
            //assert that the pause button was found
            expect($pauseButton.length).toBe(1);
        });
        
        it('should render the start button when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            // assert output rendered to the screen
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find('button:contains(Start)');
            
            //assert that the pause button was found
            expect($startButton.length).toBe(1);
        });
    });
});