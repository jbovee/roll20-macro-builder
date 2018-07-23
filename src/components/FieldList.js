import React, { Component } from 'react';
import Field from './Field';

class FieldList extends Component {
	render() {
		return (
			<div className="field-list">
				{Object.entries(this.props.fields).map(([k, v]) => {
					return <Field placeholder={k} handlerFromParent={this.props.handlerFromParent} />
				})}
			</div>
		);
	}
}

export default FieldList;