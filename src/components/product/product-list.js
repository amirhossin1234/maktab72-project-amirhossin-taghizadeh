import React from 'react'
import {Product} from './product'

export function ProductList(props) {
  return (
    <div className=' row-auto'>
        {props.products.map((itme) =>  <div className=' col-span-4' key={itme.id}>
            <Product data ={itme} />
        </div> )}

    </div>
  )
}
