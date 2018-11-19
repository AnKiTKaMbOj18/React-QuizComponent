import React, { Component } from 'react';
import './App.css';

class QuizQuestionButton extends Component {
    render() {
        return (

            <li><button>{this.props.button_text}</button></li>

        );
    }
}

export default QuizQuestionButton;