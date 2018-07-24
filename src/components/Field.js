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
		let { starttext, endtext, placeholder } = this.props;
		return (
			<div className="input-container" onClick={this.focusEditText}>
				<code>
					<span className="macro-ne brackets-l">{starttext}</span>
					<input
						className="macro-e"
						onKeyUp={(e) => this.props.handlerFromParent(e, placeholder)}
						placeholder={placeholder} ref={this.editText} />
					<span className="macro-ne brackets-r">{endtext}</span>
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