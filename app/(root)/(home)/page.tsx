import { ActivitySectors, Hero, PreviousProjects, WhoWeAre, Testimonials, Contacts } from '@/components/Home'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero/>
       <WhoWeAre/>
      <ActivitySectors/>
      <PreviousProjects/>
      <Testimonials/>
     <Contacts/>  
    </main>
  )
}
