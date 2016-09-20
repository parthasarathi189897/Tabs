/**
 * Tab component parent class file to create tabs and panels.
 * Author: Parthasarathi Das
 */
import React from 'react';
import TabHeader from './TabHeader';
import TabPanel from './TabPanel';

export default class Tabs extends React.Component{
	/**
	 * Constructor for Tab component
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props){
		super(props);
		this.state = {
			tabSelected: 0,
			tabComponents: []
		};
	}
	/**
	 * [openNewTab: method to open new Tabs.]
	 * @return {[null]} 
	 */
	openNewTab = () =>{
		let _this = this;
	    let newTab = _this.props.newTab;
	    if(typeof newTab === "function"){
	    	newTab();
	    }else{
	    	let state = _this.state;
			let tabComponents = state.tabComponents;
			tabComponents.push({
		       tabTitle: "New Tab",
		       tabContent: "New Tab Panel"
		    });
		    _this.setState({
		    	tabComponents: tabComponents
		    });
	    }
	}
	/**
	 * [_setInitialProps : Setting initial properties of the component.]
	 * @param {[object]} props [props that we get from parent.]
	 */
	_setInitialProps(props){
		let _this = this;
	    _this.setState({
	      tabSelected : props.tabSelected,
	      tabComponents: props.tabComponents
	    }); 
	}
	componentWillMount() {
		this._setInitialProps(this.props);
	}
	/**
	 * [componentWillReceiveProps : Life cycle method]
	 * @param  {[nextProps]} nextProps [next set of properties that will flow from parent.]
	 * @return {[null]}           [no return type.]
	 */
	componentWillReceiveProps(nextProps) {
	    this._setInitialProps(nextProps);  
	}
	/**
	 * [To return the tab headers for all the tabs]
	 * @return {[template]} [returns the header for tabs.]
	 */
	_getTabHeaders(){
		let _this = this;
		let props = _this.props;
		let state = _this.state;
		let tabComponents = state.tabComponents;
		let tabHeaders = [];
		tabComponents.forEach((item,index) =>{
			let tabSelected = false;
			if(index === state.tabSelected){
				tabSelected = true;
			}
			if(index < props.maxTabSize){
				tabHeaders.push(<TabHeader key={item.tabTitle+index} tabTitle={item.tabTitle} tabSelected={tabSelected} tabNumber={index} tabClick={_this._tabClick}/>);
			}
		});
		return tabHeaders;
	}
	/**
	 * [This function will return the tab pannels/body.]
	 * @return {[template]} [returns the body for tabs.]
	 */
	_getTabPanels(){
		let _this = this;
		let props = _this.props;
		let state = _this.state;
		let tabComponents = state.tabComponents;
		let tabPanels = [];
		tabComponents.forEach((item,index) =>{
			let tabSelected = false;
			if(index === state.tabSelected){
				tabSelected = true;
			}
			if(index < props.maxTabSize){
				tabPanels.push(<TabPanel key={"custom-panel-"+item.tabTitle+index} tabTitle={item.tabTitle} tabContent={item.tabContent} tabSelected={tabSelected}/>);
			}
			
		});
		return tabPanels;
	}
	/**
	 * Click method for tabs. To toggle betwen tabs.
	 * @param  {[number]} tabNumber [Tab number of the clicked tab.]
	 * @return {[null]}           [There is no return type of this function.Its just setting new state.]
	 */
	_tabClick = (tabNumber) =>{
		this.setState({
	     	tabSelected : tabNumber
	    });
	    this.props.onTabClick(tabNumber); 
	}
	/**
	 * render method for Tabs.
	 * @return {[jsx]} [Returns the tab headers and corresponding tabpanels.]
	 */
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
/**
 * proptypes for Tabs component.
 * @tabComponents : array
 * @maxTabSize : number
 * @tabSelected : number
 * @onTabClick : function
 * @newTab : function
 */
Tabs.propTypes = {
    tabComponents: React.PropTypes.array,
    maxTabSize: React.PropTypes.number,
    tabSelected: React.PropTypes.number,
    onTabClick: React.PropTypes.func,
    newTab: React.PropTypes.func
};
Tabs.defaultProps = {
    tabComponents: [],
    maxTabSize: 0,
    tabSelected: 0
};