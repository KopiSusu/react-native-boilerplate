/* @flow */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as  Actions from './../../../../actions'

import Subribbon from './../../common/subribbon/subribbon'
import Icon from './../../common/icon'

import Scroll from './components/Scroll'

import './sidenav.styl'

class Sidenav extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchData('channels', '_FETCH_LIST', 'channels')
        this.props.fetchData('direct', '_FETCH_LIST', 'direct')
    }

    render() {
        return (
            <section className='sidenav list column-4-1'>
                <Subribbon 
                    title={this.props.user.name} 
                    subTitle={
                        {
                            name: 'Current User',
                            type: 'icon',
                            icon: 'Circle',
                            iconClass: 'online'
                        }
                    }
                    iconArray={[
                        {   
                            type: 'icon',
                            icon: 'Down',
                            iconClass: 'interactive'
                        },
                        {
                            type: 'icon',
                            icon: 'Bell',
                            iconClass: 'interactive'
                        },
                        {
                            type: 'icon',
                            icon: this.props.selected.icon,
                            under: this.props.selected.icon,
                            iconClass: 'right'
                        }
                    ]}
                ></Subribbon>
                <Scroll 
                    user={this.props.user}
                    channels={this.props.channels} 
                    direct={this.props.direct} 
                    selected={this.props.selected} 
                    selectGroup={this.props.selectGroup}
                ></Scroll>
            </section>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        user: state.auth.user,
        channels: state.groups.channels,
        direct: state.groups.direct,
        selected: state.groups.selected,
        isFetching: state.groups.isFetching
    }
}

export default connect(mapStateToProp, Actions)(Sidenav);
