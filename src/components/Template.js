import React, { Component } from 'react';
import './Template.css'

class Template extends Component {
	render() {
		if (this.props.id === 0) {
			return (
				<div className="template">
					<div className="desc">
						<span>{this.props.fields.desc ? this.props.fields.desc : "desc"}</span>
					</div>
				</div>
			);
		}
		else if (this.props.id === 1) {
			return (
				<div className="template simple">
					<div className="t-container">
						<div className="rolls">
							<div className="roll">
								<span>{this.props.fields.r1 ? this.props.fields.r1 : "r1"}</span>
							</div>
							<div className="spacer"></div>
							<div className="roll">
								<span>{this.props.fields.r2 ? this.props.fields.r2 : "r2"}</span>
							</div>
						</div>
						<div className="t-label">
							<span>{this.props.fields.rname ? this.props.fields.rname : "rname"} <span>{this.props.fields.mod ? this.props.fields.mod : "mod"}</span></span>
						</div>
						<div className="charname">
							<span>{this.props.fields.charname ? this.props.fields.charname : "charname"}</span>
						</div>
					</div>
				</div>
			);
		}
		else if (this.props.id === 2) {
			return (
				<div className="template atk">
					<div className="t-container">
						<div className="rolls">
							<div className="roll">
								<span>{this.props.fields.r1 ? this.props.fields.r1 : "r1"}</span>
							</div>
							<div className="spacer"></div>
							<div className="roll">
								<span>{this.props.fields.r2 ? this.props.fields.r2 : "r2"}</span>
							</div>
						</div>
						<div className="sublabel">
							<span>{this.props.fields.range ? this.props.fields.range : "range"}</span>
						</div>
						<div className="charname">
							<span>{this.props.fields.charname ? this.props.fields.charname : "charname"}</span>
						</div>
					</div>
					<div className="desc">
						<span>{this.props.fields.desc ? this.props.fields.desc : "desc"}</span>
					</div>
				</div>
			);
		}
		else if (this.props.id === 3) {
			return (
				<div className="template dmg">
					<div className="save atk">
						<div className="savedc">
							<span className="template-inline">{this.props.fields.dc ? this.props.fields.dc : "dc"}</span><span className="template-inline">{this.props.fields.savedc ? this.props.fields.savedc : "savedc"}</span>
						</div>
						<div className="sublabel">
							<span>{this.props.fields.savedesc ? this.props.fields.savedesc : "savedesc"}</span>
						</div>
						<div className="t-label">
							<span className="template-inline">{this.props.fields.saveattr ? this.props.fields.saveattr : "saveattr"}</span><span className="template-inline">{this.props.fields.save ? this.props.fields.save : "save"}</span>
						</div>
					</div>
					<div className="desc">
						<span>{this.props.fields.desc ? this.props.fields.desc : "desc"}</span>
					</div>
					<div className="desc">
						<span className="template-inline">{this.props.fields.higherdmg ? this.props.fields.higherdmg : "higherdmg"}</span>
						<span className="sublabel">{this.props.fields.higherdmgtype ? this.props.fields.higherdmgtype : "higherdmgtype"}</span>
						<div className="t-label">
							<span>{this.props.fields.higherlvl ? this.props.fields.higherlvl : "higherlvl"}</span>
						</div>
					</div>
					<div className="t-container sheet-damagetemplate">
						<div className="rolls">
							<div className="roll">
								<span>{this.props.fields.dmg1 ? this.props.fields.dmg1 : "dmg1"}</span>
								<span className="sublabel">{this.props.fields.dmg1type ? this.props.fields.dmg1type : "dmg1type"}</span>
							</div>
							<div className="spacer"></div>
							<div className="roll">
								<span>{this.props.fields.dmg2 ? this.props.fields.dmg2 : "dmg2"}</span>
								<span className="sublabel">{this.props.fields.dmg2type ? this.props.fields.dmg2type : "dmg2type"}</span>
							</div>
						</div>
						<div className="sublabel">
							<span>{this.props.fields.range ? this.props.fields.range : "range"}</span>
						</div>
						<div className="t-label">
							<span>{this.props.fields.rname ? this.props.fields.rname : "rname"}</span>
						</div>
						<div className="charname">
							<span>{this.props.fields.charname ? this.props.fields.charname : "charname"}</span>
						</div>
					</div>
				</div>
			);
		}
		else if (this.props.id === 4) {
			return (
				<div className="template atkdmg">
					<div className="t-container atk">
						<div className="rolls">
							<div className="roll">
								<span>{this.props.fields.r1 ? this.props.fields.r1 : "r1"}</span>
							</div>
							<div className="spacer"></div>
							<div className="roll">
								<span>{this.props.fields.r2 ? this.props.fields.r2 : "r2"}</span>
							</div>
						</div>
						<div className="sublabel">
							<span>{this.props.fields.range ? this.props.fields.range : "range"}</span>
						</div>
						<div className="t-label">
							<span>{this.props.fields.rname ? this.props.fields.rname : "rname"} <span>{this.props.fields.mod ? this.props.fields.mod : "mod"}</span></span>
						</div>
						<div className="charname">
							<span>{this.props.fields.charname ? this.props.fields.charname : "charname"}</span>
						</div>
					</div>
					<div className="t-container desc save">
						<div className="savedc">
							<span className="template-inline">{this.props.fields.dc ? this.props.fields.dc : "dc"}</span><span className="template-inline">{this.props.fields.savdc ? this.props.fields.savedc : "savedc"}</span>
						</div>
						<div className="sublabel">
							<span>{this.props.fields.savedesc ? this.props.fields.savedesc : "savedesc"}</span>
						</div>
						<div className="t-label">
							<span className="template-inline">{this.props.fields.saveattr ? this.props.fields.saveattr : "saveattr"}</span><span className="template-inline">{this.props.fields.save ? this.props.fields.save : "save"}</span>
						</div>
					</div>
					<div className="desc">
						<span>{this.props.fields.desc ? this.props.fields.desc : "desc"}</span>
					</div>
					<div className="desc">
						<span className="template-inline">{this.props.fields.higherdmg ? this.props.fields.higherdmg : "higherdmg"}</span>
						<span className="sublabel">{this.props.fields.higherdmgtype ? this.props.fields.higherdmgtype : "higherdmgtype"}</span>
						<div className="t-label">
							<span>{this.props.fields.higherlvl ? this.props.fields.higherlvl : "higherlvl"}</span>
						</div>
					</div>
					<div className="t-container sheet-damagetemplate">
						<div className="rolls">
							<div className="roll">
								<span>{this.props.fields.dmg1 ? this.props.fields.dmg1 : "dmg1"}</span>
								<span className="sublabel">{this.props.fields.dmg1Type ? this.props.fields.dmg1Type : "dmg1Type"}</span>
							</div>
							<div className="spacer"></div>
							<div className="roll">
								<span>{this.props.fields.dmg2 ? this.props.fields.dmg2 : "dmg2"}</span>
								<span className="sublabel">{this.props.fields.dmg2Type ? this.props.fields.dmg2Type : "dmg2Type"}</span>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Template;