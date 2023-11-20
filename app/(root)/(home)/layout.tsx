import Footer from "@/components/Footer"
import { WhatsUp } from "@/components/Home"
import Navbar from "@/components/Navbar"


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<main className='flex w-full flex-col items-center justify-between'>
  <Navbar/>
  <main className="flex flex-col w-full h-full">{children}</main>
  <Footer/>
  <WhatsUp />
</main>
  )
}
