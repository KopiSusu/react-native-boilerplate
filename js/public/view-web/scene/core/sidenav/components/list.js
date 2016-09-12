/* @flow */
import React from 'react'
import Icon from './../../../common/icon'

class List extends React.Component {

  	render() {
  		const selected = this.props.selected.name
  		const selectGroup = this.props.selectGroup
	    return (
	        <ul>
				{
					_.map(this.props.list, function (item, index) {
						return (
	                        <li 
	                            key={index} 
	                            className={ ( selected === item.name ? 'selected' : '' ) + " title"} 
	                            onClick={(e) => { selectGroup(item) }}
	                        >
	                            <p className="column-2-1">{item.name}</p>
	                            <Icon icon='Chat' iconClass="right"/>
	                            <Icon icon={item.icon} iconClass="right"/>
	                        </li>
	                    )
					})
				}
			</ul>
	    )
  	}
}

export default List;
