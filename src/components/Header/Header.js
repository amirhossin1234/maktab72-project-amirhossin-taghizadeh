import React from 'react'
import logo from '../../assets/images/settings-gear.svg'
import shopcart from '../../assets/images/shopping-cart-empty-side-view.svg'

function Header() {
  return (
    <div className=' flex items-center gap-8 w-full h-[105px] pr-6 bg-[#D4D9DD]'>
        <img className=' w-10 h-10' src={logo} />
        <ul className=' flex items-baseline gap-16 pr-3 cursor-pointer'>
          <li>خانه</li>
          <li>اکسسوری</li>
          <li>قطعات مصرفی</li>
          <li>تیونینگ</li>
        </ul>
          
        <div className='leftMenu flex items-end justify-center gap-4 pr-[420px]'>
          <div className=' pr-24'>
          <input className=' w-56 h-7 pr-1' type="text" placeholder='نام محصول را جستوجو کنید' />  
          </div>
          <img className=' w-8 h-8' src={shopcart}/>
          <a className=' p-[2px]' href="#">ورود</a>
          <div>|</div>
          <a className=' p-[0px]' href="#">ثبت نام</a>
        </div>
        
    </div> 
  )
}

export default Header