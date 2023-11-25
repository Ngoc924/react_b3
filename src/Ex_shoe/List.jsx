import React, { Component } from 'react'
import Item from './Item';

export default class List extends Component {
  render() {
      let{List} = this.props;
    return (
      <div className='row col-6'>
        {List.map((item)=> {
            return <Item handleAddToCart={this.props.handleAddToCart} key={item.id} data={item}/>;
        })}
      </div>
    )
  }
}
