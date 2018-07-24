import React, { Component } from 'react';
import FieldList from './components/FieldList';
import Template from './components/Template';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.toggle = this.toggle.bind(this);
		this.handleData = this.handleData.bind(this);
		this.changeTemplate = this.changeTemplate.bind(this);
		this.templateNames = ["Description", "Simple", "Attack", "Damage", "Attack & Damage"];
		this.templateShort = ["desc", "simple", "atk", "dmg", "atkdmg"];
		this.fields = [
			{"desc": ""},
			{"r1": "", "r2": "", "rname": "", "mod": "", "charname": ""},
			{"r1": "", "r2": "", "range": "", "rname": "", "mod": "", "charname": "", "desc": ""},
			{"dc": "", "savedc": "", "savedesc": "", "saveattr": "", "save": "", "desc": "", "higherdmg": "", "higherdmgtype": "", "higherlvl": "", "dmg1": "", "dmg1type": "", "dmg2": "", "dmg2type": "", "range": "", "rname": "", "charname": ""},
			{"r1": "", "r2": "", "range": "", "rname": "", "mod": "", "charname": "", "dc": "", "savedesc": "", "saveattr": "", "save": "", "desc": "", "higherdmg": "", "higherdmgtype": "", "higherlvl": "", "dmg1": "", "dmg1type": "", "dmg2": "", "dmg2type": ""}
		];
		this.state = {
			dropdownOpen: false,
			currentTemplateId: 1,
			currentFields: this.fields[1]
		};
	}

	changeTemplate(id) {
		this.fields.forEach((f, i) => {
			Object.keys(f).forEach((k) => {this.fields[i][k] = ""});
		})
		this.setState({
			currentTemplateId: id,
			currentFields: this.fields[id]
		});
	}

	handleData(e, field) {
		this.fields[this.state.currentTemplateId][field] = e.target.value === '' ? field : e.target.value;
		this.setState({
			currentFields: this.fields[this.state.currentTemplateId]
		});
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	render() {
		let { dropdownOpen, currentTemplateId, currentFields } = this.state;
		let output = "&{template:" + this.templateShort[currentTemplateId] + "} " + Object.entries(currentFields).map(([k,v]) => "{{" + k + "=" + v + "}}").join(' ');
		return (
			<div className="app container">
				<div className="row" style={{marginTop: (window.innerHeight - 790) / 2}}>
					<div className="col">
						<Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
							<DropdownToggle>
								<Template id={currentTemplateId} fields={currentFields} />
							</DropdownToggle>
							<DropdownMenu
								modifiers={{
									setMaxHeight: {
										enabled: true,
										order: 890,
										fn: (data) => {
											return {
												...data,
												styles: {
													...data.styles,
													overflow: 'auto',
													maxHeight: 320,
												},
											};
										},
									},
								}}
							>
								{this.templateNames.map((name, i) => {
									if (i === this.templateNames.length-1) {
										return <DropdownItem onClick={() => {this.changeTemplate(i);}}>{name}<Template id={i} fields={this.fields[i]} /></DropdownItem>
									}
									return [
										<DropdownItem onClick={() => {this.changeTemplate(i);}}>{name}<Template id={i} fields={this.fields[i]} /></DropdownItem>,
										<DropdownItem divider/>
									]
								})}
							</DropdownMenu>
						</Dropdown>
					</div>
					<div className="col">
						<FieldList fields={currentFields} handlerFromParent={this.handleData} />
					</div>
					<div className="col">
						<code>
							<textarea className="result-single" spellCheck={false} wrap="hard" value={output} readOnly />
						</code>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
