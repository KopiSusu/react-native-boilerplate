/* @flow */
import React from 'react'
import Icon from './../../../common/icon'

const remove = {
    icon: 'Happy',
    iconClass: 'interactive'
}
const search = {
    icon: 'PlusOutline',
    iconClass: 'interactive'
}

class Input extends React.Component {
    render() {
        return (
            <div className={ 'chatInput ' + this.props.iconClass || '' }>
                <Icon {...search}/>
                <input ref='chatInput' placeholder='Type message here...' onKeyPress={this.props._handleKeyPress.bind(this)}/>
                <Icon {...remove}/>
            </div>
        );
    }
}

export default Input;