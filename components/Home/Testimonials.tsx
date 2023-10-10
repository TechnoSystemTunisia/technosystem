import React from 'react'
import ScrollAnimation from './ScrollAnimation'

const styles = {
  title:"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white capitalize",
  subTitle:"mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400",
  figureClass:"flex flex-col justify-center items-center p-2 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
}

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex flex-col items-center justify-center w-full p-4 min-h-[calc(100vh-80px)] border-b-2'>
      <div className='flex w-full h-full justify-center'>
      <ScrollAnimation/>
      <div className="flex flex-1 bg-white dark:bg-gray-900 m-4 max-w-[1460px] lg:px-16">
        <div className="py-8 px-4 text-center lg:py-16 lg:px-6">
          <div>
            <h2 className={styles.title}>Témoignages</h2>
            <p className={styles.subTitle}>Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
          </div> 
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className={styles.figureClass}>
              <blockquote className="mx-auto mb-8 text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
                <p className="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                <p className="my-4">Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                <p className="my-4">If you care for your time, I hands down would go with this."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                </div>
              </figcaption>    
            </figure>
            <figure className={styles.figureClass}>
              <blockquote className="mx-auto mb-8 text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                <p className="my-4">"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
                <p className="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Roberta Casas</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                </div>
              </figcaption>    
            </figure>
            <figure className={styles.figureClass}>
              <blockquote className="mx-auto mb-8 text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow and variants</h3>
                <p className="my-4">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.</p>
                <p className="my-4">Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).</p>
                <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Jese Leos</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                </div>
              </figcaption>    
            </figure>
            <figure className={styles.figureClass}>
              <blockquote className="mx-auto mb-8 text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                <p className="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
                <p className="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Joseph McFall</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                </div>
              </figcaption>    
            </figure>
          </div>
        </div>
        </div>
      </div>
      </section>
 

  )
}

export default Testimonials