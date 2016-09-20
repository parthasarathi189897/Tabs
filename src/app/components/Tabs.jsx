import React from 'react';
import TabHeader from './TabHeader';
import TabPanel from './TabPanel';

export default class Tabs extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tabSelected : 0
		};
	}
	openNewTab(){
		alert();
	}
	componentWillMount() {
	     this.setState({
	     	tabSelected : this.props.tabSelected
	     }); 
	}
	/**
	 * [To return the tab headers for all the tabs]
	 * @return {[type]} [description]
	 */
	_getTabHeaders(){
		let _this = this;
		let props = _this.props;
		let state = _this.state;
		let tabComponents = props.tabComponents;
		let tabHeaders = [];
		tabComponents.forEach((item,index) =>{
			let tabSelected = false;
			if(index === state.tabSelected){
				tabSelected = true;
			}
			tabHeaders.push(<TabHeader tabTitle={item.tabTitle} tabSelected={tabSelected} tabNumber={index} tabClick={_this._tabClick}/>);
		});
		return tabHeaders;
	}
	_getTabPanels(){
		let _this = this;
		let props = _this.props;
		let state = _this.state;
		let tabComponents = props.tabComponents;
		let tabPanels = [];
		tabComponents.forEach((item,index) =>{
			let tabSelected = false;
			if(index === state.tabSelected){
				tabSelected = true;
			}
			tabPanels.push(<TabPanel tabTitle={item.tabTitle} tabContent={item.tabContent} tabSelected={tabSelected}/>);
		});
		return tabPanels;
	}
	_tabClick = (tabNumber) =>{
		this.setState({
	     	tabSelected : tabNumber
	    }); 
	}
	render(){
		let _this = this;
		let tabHeaders = this._getTabHeaders();
		let tabPanels = this._getTabPanels();
		let newTabInd = false;
		if(tabHeaders.length < _this.props.maxTabSize){
			newTabInd = true;
		}
		return(
			<div className="tab-container">
				<ul className="tab-header-cont">
					{tabHeaders}
					{newTabInd ? <li className="newtab-icon-cont"><div className="icon-new-tab" onClick={_this.openNewTab}></div></li> : null}
				</ul>
				{tabPanels}
				
			</div>
		);
	}
};
Tabs.propTypes = {
    tabComponents: React.PropTypes.array,
    maxTabSize: React.PropTypes.number,
    tabSelected: React.PropTypes.number
};
Tabs.defaultProps = {
    tabComponents: [],
    maxTabSize: 0,
    tabSelected: 0
};