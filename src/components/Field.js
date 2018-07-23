import React, { Component } from 'react';
import './Field.css'

class Field extends Component {
	constructor(props) {
		super(props);
		this.editText = React.createRef();
		this.focusEditText = this.focusEditText.bind(this);
	}

	focusEditText() {
		this.editText.current.focus();
	}

	render() {
		return (
			<div className="input-container" onClick={this.focusEditText}>
				<code>
					<span className="macro-ne brackets-l">{this.props.starttext}</span>
					<input className="macro-e" onChange={(e) => this.props.handlerFromParent(e, this.props.placeholder)} placeholder={this.props.placeholder} ref={this.editText}></input>
					<span className="macro-ne brackets-r">{this.props.endtext}</span>
				</code>
			</div>
		);
	}
}

Field.defaultProps = {
	starttext: "{{",
	endtext: "}}",
	placeholder: "placeholder"
}

export default Field;