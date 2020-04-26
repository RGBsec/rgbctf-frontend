import React, { Component } from "react";

import "./styles/Tickbox.scss";

export default class Tickbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: !!props.ticked
        };
    }

    click = () => {
        this.setState({ val: !this.state.val });
    };

    render() {
        return <div className={"tickbox" + (this.state.val ? " ticked" : "")} onClick={this.click}>
            <div className={"box"} />
            <div className={"cbLabel"}>{this.props.children}</div>
        </div>;
    }
}
