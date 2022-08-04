import React, { Component } from 'react'
import {ProductList} from '../components/product'

export default class Home extends Component {

    state = {products:[
        {
            id: 1,
            title:'رینگ 20 اینچی',
            price:'35,670,000',
            img: 'https://shop.persiakhodro.ir/ProductImages/Thumbs/ee5574bd-bf03-4894-9c21-3a5237e9e4b9_Thumb.jpg'
        },
        {
          id: 2,
          title:'رینگ 19 اینچی',
          price:'25,700,000',
          img: 'https://shop.persiakhodro.ir/ProductImages/Thumbs/fd48823c-eaaa-4c7e-a0e0-5f661cd87864_Thumb.jpg'
      },
      {
        id: 3,
        title:'رینگ 20 اینچی',
        price:'30,520,000',
        img: 'https://shop.persiakhodro.ir/ProductImages/Thumbs/ee5574bd-bf03-4894-9c21-3a5237e9e4b9_Thumb.jpg'
    },
    {
      id: 4,
      title:'رینگ 18 اینچی',
      price:'15,230,000',
      img: 'https://shop.persiakhodro.ir/ProductImages/Thumbs/fd48823c-eaaa-4c7e-a0e0-5f661cd87864_Thumb.jpg'
  }
    ]}



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
