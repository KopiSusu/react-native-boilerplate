/* @flow */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as  Actions from './../../../../actions'

import Chat from './components/chat'
import './messenger.styl'

class Messenger extends React.Component {
    constructor(props) {
        super(props)
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            
            const newMessages = {
              from: 'me',
              value: e.currentTarget.value
            }

            e.currentTarget.value = '';
            this.props.submitMessage(newMessages)
        }
    }

  	render() {
    	return (
    		<section className='messenger list column-1'>
    			<section className='chat column-1'>
	          		<Chat></Chat>
		        </section>
    		</section>
    	)
  	}

}

const mapStateToProp = (state) => {
    // make sure to get messages from the chat
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProp, Actions)(Messenger);
