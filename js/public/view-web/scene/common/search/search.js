/* @flow */
import React from 'react'
import Icon from './../icon'

const remove = {
    icon: 'Close',
    iconClass: 'interactive'
}
const search = {
    icon: 'Search',
    iconClass: 'interactive'
}

class Subribbon extends React.Component {
  render() {
    return (
      <div className={ 'search ' + this.props.iconClass }>
        <Icon {...search}/>
      	<input placeholder='Search'/>
      	<Icon {...remove}/>
      </div>
    );
  }
}

export default Subribbon;