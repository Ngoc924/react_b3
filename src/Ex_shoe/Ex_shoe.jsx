import React, { Component } from 'react'
import { ShoeArr } from './data'
import CartShoe from './CartShoe'
import List from './List'

export default class Ex_shoe extends Component {
    state={
        shoeArr:ShoeArr,
        cart:[],
    }
    handleAddToCart=(shoe)=> {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item)=> item.id == shoe.id);
    if(index==-1){
        let newShoe = {...shoe,soLuong:1};
        cloneCart.push(newShoe);
    }else{
        cloneCart[index].soLuong++;
    }
    this.setState({cart:cloneCart});
    };
    handleDelete = (id) => {
        let newCart = this.state.cart.filter((item)=> item.id != id);
        this.setState({cart: 
            newCart});
    }
  render() {
    return (
      <div className='row'>
        <CartShoe handleDelete={this.handleDelete} cart={this.state.cart}/>
        <List handleAddToCart={this.handleAddToCart} List={this.state.shoeArr}/>
      </div>
    )
  }
}
