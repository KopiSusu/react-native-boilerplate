/* @flow */
import React from 'react'
import Icon from './../icon'
import Subtitle from './components/subtitle'
import Search from './../search/search'

class Subribbon extends React.Component {
  render() {
    const iconArray = this.props.iconArray || [];
    return (
    	<section className='ribbon column-1'>
          <div className={ ( this.props.subTitle ? 'subtitle ' : '') + 'header'}>
	      	  <h1>{this.props.title}</h1>
            { 
              this.props.subTitle ? ( 
                <Subtitle {...this.props.subTitle}/>
              ) : null 
            }
          </div>
	      	{
            _.map(iconArray, (icon, index) => {
              return this.renderComponent(icon, index)
            })
	      	}
    	</section>
    );
  }
  renderComponent (item, index) {
    switch (item.type) {
      case 'icon':
        return <Icon key={index} {...item}/>
        break
      case 'search':
        return <Search key={index} {...item}/>
        break
    }
  }
}

export default Subribbon;