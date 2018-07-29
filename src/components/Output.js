import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

class Output extends Component {
	constructor(props) {
		super(props);
		this.outputText = {};
		this.selectText = this.selectText.bind(this);
	}

	selectText() {
		this.outputText.select();
	}

	render() {
		let { value } = this.props;
		return (
			<div className="output-container">
				<code>
					<button onClick={this.selectText}>Select All</button>
					<Textarea inputRef={(outputText) => this.outputText = outputText} className="result-single" spellCheck={false} wrap="hard" value={value} readOnly />
				</code>
			</div>
		);
	}
}

export default Output;