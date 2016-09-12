/* @flow */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as  Actions from './../../../../actions'

import Subribbon from './../../common/subribbon/subribbon'
import Chat from './components/chat'
import './messenger.styl'

const messageConfigData = {
    title: '',
    subTitle: {
        name: 'Add Note',
        type: 'button',
        icon: 'PlusOutline',
        iconClass: 'interactive'
    },
    iconArray: [
        {
            type: 'icon',
            icon: 'Options',
            iconClass: 'interactive right'
        },
        {
            type: 'icon',
            icon: 'StarOutline',
            iconClass: 'interactive right'
        },
        {
            type: 'search',
            iconClass: 'right'
        },
        {
            type: 'icon',
            icon: 'Cash',
            iconClass: 'interactive right dim'
        },
        {
            type: 'icon',
            icon: 'Gear',
            iconClass: 'interactive right dim'
        }
    ]
}

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
        let messageConfig = messageConfigData
        messageConfig['title'] = this.props.selected.name
    	return (
    		<section className='messenger list column-4-3'>
    			<section className='chat column-1'>
		          	<Subribbon {...messageConfig}></Subribbon>
	          		<Chat messages={this.props.messages} _handleKeyPress={this._handleKeyPress.bind(this)}></Chat>
		        </section>
    		</section>
    	)
  	}

}

const mapStateToProp = (state) => {
    return {
        user: state.auth.user,
        selected: state.groups.selected,
        messages: state.chat.messages,
        isFetching: state.groups.isFetching
    }
}

export default connect(mapStateToProp, Actions)(Messenger);
