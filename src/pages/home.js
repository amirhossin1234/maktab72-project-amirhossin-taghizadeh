import React, { Component } from 'react'
import {ProductList} from '../components/product'
import { productService } from '../components/product';

export default class Home extends Component {

    state = {products: productService.getProduct()};

  render() {
    return (
      <div className='container'>
        <div className=' row-auto mt-10'>
        <ProductList products={this.state.products} />
        </div>
      </div>
    )
  }
}
