import Link from 'next/link'
import Image from 'next/image'
import HomeMenuList from './HomeMenuList'
import DarkModeButton from './DarkModeButton'
import PhoneIcon from './icons/PhoneIcon'
import SmallMenu from './SmallMenu'

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center h-[80px] border-b border-gray-400 px-4 sticky top-0 shadow-black shadow-sm bg-white dark:bg-[#121212] z-20">
      <div className='flex items-center justify-between w-full h-full max-w-[1460px]'>
        <Link href={'/'} className='flex items-center gap-2 cursor-pointer'>
            <Image src='/vercel.svg' width={55} height={40} alt='JSM logo' />
            <h1 className='text-2xl font-bold font-sans'>Techno Sytem</h1>
        </Link>
        <HomeMenuList/>
        <div className='hidden lg:flex h-full items-center gap-4 text-xl'>
            <PhoneIcon iconClass='w-10 h-10 rounded-full border border-black dark:border-white p-1'/>
            <span className='font-bold underline underline-offset-[6px] cursor-pointer'>(+216) 58 021 588</span>
            <DarkModeButton/>
        </div>
        <SmallMenu/>

      </div>
    </nav>
  )
}

export default Navbar