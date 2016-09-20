/**
 * Sample class/component to use Tab component.
 */
import React from 'react';
import Tabs from './components/Tabs';

export default class TabExampleContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tabComponents: [
        {
          tabTitle: "Tab1",
          tabContent: "Panel1"
        },
        {
          tabTitle: "Tab2",
          tabContent: "Panel2"
        }
      ]
    };
  }
  onTabClick(tabNumber){
    alert('tabClicked');
  }
  newTab = () =>{
    let newTab ={
      tabTitle: "New",
      tabContent: "New"
    };
    let tabComponents = this.state.tabComponents;
    console.log('tabComponents',tabComponents);
    tabComponents.push(newTab);
    this.setState({
      tabComponents: tabComponents
    });
    //alert('createNewTab');
  }
  render(){
    let tabComponents = this.state.tabComponents;
    const maxTabSize = 5;
    return (
      <div className="tab-example">
        <h3 className="component-title"> Tab Example </h3>
        {/*Example to add 3 tabs. Accordingly we can increase*/}
        <Tabs 
          tabComponents={tabComponents} 
          maxTabSize={maxTabSize} 
          tabSelected={0}
          onTabClick={this.onTabClick}
          newTab={this.newTab}>
          
        </Tabs>
      </div>
    )
  }
}