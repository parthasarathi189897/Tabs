/**
 * Tab header/tab component.
 * Author: Parthasarathi Das
 */
import React from 'react';

export default class TabHeader extends React.Component{
	render(){
		let _this = this;
		let props = _this.props;
		return(
			<li role="tab" tabIndex={props.tabNumber} className={props.tabSelected ? "selected-tab-title" : ""}>
				<button className="tab-button" title={props.tabTitle} onClick={props.tabClick.bind(_this,props.tabNumber)}>{props.tabTitle}</button>
			</li>
		);
	}
}
/**
 * proptypes for TabHeader component.
 * @tabTitle : string
 * @tabSelected : bool
 * @tabNumber : number
 * @tabClick : function
 */
TabHeader.propTypes = {
    tabTitle: React.PropTypes.string,
    tabSelected: React.PropTypes.bool,
    tabNumber: React.PropTypes.number.isRequired,
    tabClick: React.PropTypes.func.isRequired
};
TabHeader.defaultProps = {
    tabTitle: "New Tab",
    tabSelected: true,
    tabNumber: 0
};