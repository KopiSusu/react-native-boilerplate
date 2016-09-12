/* @flow */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as  Actions from './../../actions'

import Sidenav from './core/sidenav/sidenav'
import Ribbon from './core/ribbon/ribbon'
import Messenger from './core/messenger/messenger'

import './core/global.styl'

class Scene extends React.Component {

  	render() {
  		switch(this.props.user) {
  			case null:
  			case undefined:
  				return null;
  			default:
  				return (
  					<section className="window">
		  				<Ribbon></Ribbon>
						<Sidenav></Sidenav>
						<Messenger></Messenger>
					</section>
  				)
  		}
  	}

}

const mapStateToProp = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProp, Actions)(Scene);
