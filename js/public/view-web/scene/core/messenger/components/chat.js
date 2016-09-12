/* @flow */
import React from 'react'
import Input from './input'

class Chat extends React.Component {

    render() {
    	return (
    		<div className='container'>
    			<div ref='bubble' className='bubble'>
                    {
                        _.map(this.props.messages , function (message, index) {
                            return (
                                <div key={index} className={'message ' + message.from}>
                                    <p>{message.value}</p>
                                </div>
                            )
                        })
                    }
    			</div>
                <Input _handleKeyPress={this.props._handleKeyPress.bind(this)}/>
    		</div>
    	)
    }
}

export default Chat
