import React, { Component } from 'react';

export default class Alert extends Component {

    render() {
        return (
            <div className={'alert ' + this.props.classes}>{this.props.text}</div>
        )
    }

}

