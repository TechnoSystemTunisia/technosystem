import { ActivitySectors, Hero, PreviousProjects, WhoWeAre, Testimonials, Contacts } from '@/components/Home'

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
