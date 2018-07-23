import React, { Component } from 'react';
import './Template.css'

class Template extends Component {
	render() {
		let { id } = this.props;
		if (id === 0) {
			let { desc } = this.props.fields;
			return (
				<div className="template">
					<div className="desc">
						<span>{desc ? desc : "desc"}</span>
					</div>
				</div>
			);
		}
		else if (id === 1) {
			let { r1, r2, rname, mod, charname } = this.props.fields;
			return (
				<div className="template simple">
					<div className="t-container">
						<div className="rolls">
							<div className="roll">
								<span>{r1 ? r1 : "r1"}</span>
							</div>
							<div className="spacer"></div>
							<div className="roll">
								<span>{r2 ? r2 : "r2"}</span>
							</div>
						</div>
						<div className="t-label">
							<span>{rname ? rname : "rname"} <span>{mod ? "(" + mod + ")" : "(mod)"}</span></span>
						</div>
						<div className="charname">
							<span>{charname ? charname : "charname"}</span>
						</div>
					</div>
				</div>
			);
		}
		else if (id === 2) {
			let { r1, r2, range, charname, desc } = this.props.fields;
			return (
				<div className="template atk">
					<div className="t-container">
						<div className="rolls">
							<div className="roll">
								<span>{r1 ? r1 : "r1"}</span>
							</div>
							<div className="spacer"></div>
							<div className="roll">
								<span>{r2 ? r2 : "r2"}</span>
							</div>
						</div>
						<div className="sublabel">
							<span>{range ? range : "range"}</span>
						</div>
						<div className="charname">
							<span>{charname ? charname : "charname"}</span>
						</div>
					</div>
					<div className="desc">
						<span>{desc ? desc : "desc"}</span>
					</div>
				</div>
			);
		}
		else if (id === 3) {
			let { dc, savedc, savedesc, saveattr, save,
				desc,
				higherdmg, higherdmgtype, higherlvl,
				dmg1, dmg1type, dmg2, dmg2type,
				range, rname, charname } = this.props.fields;
			return (
				<div className="template dmg">
					<div className="save atk">
						<div className="savedc">
							<span className="template-inline">{dc ? dc : "dc"}</span><span className="template-inline">{savedc ? savedc : "savedc"}</span>
						</div>
						<div className="sublabel">
							<span>{savedesc ? savedesc : "savedesc"}</span>
						</div>
						<div className="t-label">
							<span className="template-inline">{saveattr ? saveattr : "saveattr"}</span><span className="template-inline">{save ? save : "save"}</span>
						</div>
					</div>
					<div className="desc">
						<span>{desc ? desc : "desc"}</span>
					</div>
					<div className="desc">
						<span className="template-inline">{higherdmg ? higherdmg : "higherdmg"}</span>
						<span className="sublabel">{higherdmgtype ? higherdmgtype : "higherdmgtype"}</span>
						<div className="t-label">
							<span>{higherlvl ? higherlvl : "higherlvl"}</span>
						</div>
					</div>
					<div className="t-container sheet-damagetemplate">
						<div className="rolls">
							<div className="roll">
								<span>{dmg1 ? dmg1 : "dmg1"}</span>
								<span className="sublabel">{dmg1type ? dmg1type : "dmg1type"}</span>
							</div>
							<div className="spacer"></div>
							<div className="roll">
								<span>{dmg2 ? dmg2 : "dmg2"}</span>
								<span className="sublabel">{dmg2type ? dmg2type : "dmg2type"}</span>
							</div>
						</div>
						<div className="sublabel">
							<span>{range ? range : "range"}</span>
						</div>
						<div className="t-label">
							<span>{rname ? rname : "rname"}</span>
						</div>
						<div className="charname">
							<span>{charname ? charname : "charname"}</span>
						</div>
					</div>
				</div>
			);
		}
		else if (id === 4) {
			let { r1, r2, range, rname, mod, charname,
				dc, savedc, savedesc, saveattr, save,
				desc,
				higherdmg, higherdmgtype, higherlvl,
				dmg1, dmg1type, dmg2, dmg2type } = this.props.fields;
			return (
				<div className="template atkdmg">
					<div className="t-container atk">
						<div className="rolls">
							<div className="roll">
								<span>{r1 ? r1 : "r1"}</span>
							</div>
							<div className="spacer"></div>
							<div className="roll">
								<span>{r2 ? r2 : "r2"}</span>
							</div>
						</div>
						<div className="sublabel">
							<span>{range ? range : "range"}</span>
						</div>
						<div className="t-label">
							<span>{rname ? rname : "rname"} <span>{mod ? "(" + mod + ")" : "(mod)"}</span></span>
						</div>
						<div className="charname">
							<span>{charname ? charname : "charname"}</span>
						</div>
					</div>
					<div className="t-container desc save">
						<div className="savedc">
							<span className="template-inline">{dc ? dc : "dc"}</span><span className="template-inline">{savedc ? savedc : "savedc"}</span>
						</div>
						<div className="sublabel">
							<span>{savedesc ? savedesc : "savedesc"}</span>
						</div>
						<div className="t-label">
							<span className="template-inline">{saveattr ? saveattr : "saveattr"}</span><span className="template-inline">{save ? save : "save"}</span>
						</div>
					</div>
					<div className="desc">
						<span>{desc ? desc : "desc"}</span>
					</div>
					<div className="desc">
						<span className="template-inline">{higherdmg ? higherdmg : "higherdmg"}</span>
						<span className="sublabel">{higherdmgtype ? higherdmgtype : "higherdmgtype"}</span>
						<div className="t-label">
							<span>{higherlvl ? higherlvl : "higherlvl"}</span>
						</div>
					</div>
					<div className="t-container sheet-damagetemplate">
						<div className="rolls">
							<div className="roll">
								<span>{dmg1 ? dmg1 : "dmg1"}</span>
								<span className="sublabel">{dmg1type ? dmg1type : "dmg1type"}</span>
							</div>
							<div className="spacer"></div>
							<div className="roll">
								<span>{dmg2 ? dmg2 : "dmg2"}</span>
								<span className="sublabel">{dmg2type ? dmg2type : "dmg2type"}</span>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Template;