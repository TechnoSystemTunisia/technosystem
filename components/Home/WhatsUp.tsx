"use client"
import Link from 'next/link'
import WhatsAppIcon from '../icons/WhatsAppIcon'
import { WHATSAPPNUMBER } from '@/lib/constants'

const WhatsUp = () => {
  return (
    <div className="fixed bottom-5 right-5">
        <Link href={`http://wa.me/${WHATSAPPNUMBER}`} target='_blank' className='mb-2 inline-block rounded-xl p-1 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-green-500 hover:bg-[#128c7e]'>
            <WhatsAppIcon iconClass="w-12 h-12 p-2" />
        </Link>
    </div>
  )
}

export default WhatsUp