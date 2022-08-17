import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header';
import { productService } from '../components/product';

export default function Detail() {

    const {id} = useParams();
    const data = productService.getProductById(id);

  return (
    
    <div className=' row-auto'>
        <div className=' columns-5'>
            <img className=' w-[100%]' src={data.img} />
            
        </div>
        <div className=' columns-7'>
            <h1>{data.title}</h1>
            <strong className=' bg-sky-700'>{data.price}</strong>
        </div>

    </div>
  
  )
}
