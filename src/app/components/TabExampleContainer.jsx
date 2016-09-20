import React from 'react';
import Tabs from './Tabs';

export default class TabExampleContainer extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    let tabComponents = [
      {
        tabTitle: "Tab1",
        tabContent: "test"
      },
      {
        tabTitle: "Tab2",
        tabContent: "test1"
      }
    ];
    const maxTabSize = 5;
    return (
      <div className="tab-example">
        <h3 className="component-title"> Tab Example </h3>
        {/*Example to add 3 tabs. Accordingly we can increase*/}
        <Tabs tabComponents={tabComponents} maxTabSize={maxTabSize} tabSelected={0}></Tabs>
      </div>
    )
  }
}