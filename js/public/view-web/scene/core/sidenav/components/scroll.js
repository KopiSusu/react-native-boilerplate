/* @flow */
import React from 'react'
import Subribbon from './../../../common/subribbon/subribbon'
import List from './list'

const listsData = [
    {
        title: 'Channels',
        iconArray: [{
            type: 'icon',
            icon: 'Plus',
            iconClass: 'interactive right'
        }]
    },
    {
        title: 'Direct',
        iconArray: [{
            type: 'icon',
            icon: 'Plus',
            iconClass: 'interactive right'
        }]
    }
]

class Scroll extends React.Component {
  render() {
    const props = this.props
    const lists = props.user.name === 'Admin' ? listsData : [listsData[1]];
    return (
        <div className="scroll">
            {
                _.map(lists, function(section, index) {
                    const key = section.title
                    section.title = section.title.toUpperCase()
                    return <div key={index} className="sub">
                        <Subribbon {...section}></Subribbon>
                        <List
                            list={props[section.title.toLowerCase()]} 
                            selected={props.selected} 
                            selectGroup={props.selectGroup}
                        ></List>
                    </div>
                })
            }
        </div>
    );
  }
}

export default Scroll;
