import React from 'react'

export default function Header() {
  return (
    <div className=' w-full h-28 flex justify-items-center bg-gray-500 text-black'>
        <img className=' w-8 h-8  flex justify-items-end' src="/src/assets/icons/settings-gear.svg" />
        <div>
        <a href="#">خانه</a>
        <a href="#">اکسسوری</a>
        <a href="#">قطعات مصرفی</a>
        <a href="#">تیونینگ</a>
        </div>
        <img src="/src/assets/images/ذربین.png" />
        <img src="/src/assets/icons/shopping-cart-empty-side-view.svg" />
        <a href="#">ورود</a>
        <a href="#">ثبت نام</a>

    </div>
  )
}
