import Header from '../src/components/common/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div>
        <div className=' w-full h-24 flex justify-items-center bg-gray-400 text-black'>
        <img className=' w-8 h-8  flex justify-items-end' src="/src/assets/icons/settings-gear.svg" />
        <div>
        <a href="#">خانه</a>
        <a href="#">اکسسوری</a>
        <a href="#">قطعات مصرفی</a>
        <a href="#">تیونینگ</a>
        </div>
        <img className=' w-6 h-6' src="/src/assets/images/ذربین.png" />
        <img className=' w-6 h-6' src="/src/assets/icons/shopping-cart-empty-side-view.svg" />
        <a href="#">ورود</a>
        <a href="#">ثبت نام</a>

    </div>
      </div>
  )
}
