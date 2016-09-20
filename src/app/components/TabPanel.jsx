/**
 * Tab Panel component. Any template can be provided as content.
 * Author: Parthasarathi Das
 */
import React from 'react';

export default class TabPanel extends React.Component{
	render(){
		let _this = this;
		let props = _this.props;
		let tabSelected = props.tabSelected;
		return(
			<div role="tabpanel" className={tabSelected ? "tab-panel" : "tab-hidden"}>
				{props.tabContent}
			</div>
		);
	}
}