import React from 'react'

export function Product(props) {

    const data = props.data;
  return (
    <div className=' flex justify-around items-center'>   
    <div className='  w-[300px] h-[500px] mt-20 bg-[#fff]'>
        <img src={data.img} className=' w-[240px] h-[240px] pt-11 pr-11'/>
        <h5 className=' pt-11 pr-11 text-xl'>{data.title}</h5>
        <p className=' pt-5 pr-11 text-black text-xl'>{data.price} تومان</p>
        <div className=' pt-9 pr-11'>
        <button className=' w-[130px] h-[60px]  bg-[#42B3F0] text-white' href="#">خرید</button>
        </div>
    </div>
    </div>
  )
}
