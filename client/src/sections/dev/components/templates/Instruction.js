import React, { Component } from 'react';

export default class Instruction extends Component {

    render() {
        return (
            <div className={'card instruction ' + this.props.classes}>
                <div className="card-content">
                    {this.props.children}
                </div>
            </div>
        )
    }

}