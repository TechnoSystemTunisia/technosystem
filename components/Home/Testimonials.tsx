import React from 'react'
import ScrollAnimation from '../ScrollAnimation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


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
            <p className={styles.subTitle}>\Avis de nos clients fidele</p>
          </div> 
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className={styles.figureClass}>
              <blockquote className="mx-auto mb-8 text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Service Exemplaire et Installation Parfaite</h3>
                <p className="my-4">"L'équipe a dépassé nos attentes avec son professionnalisme et l'installation impeccable de notre [produit/service]. Nous sommes pleinement satisfaits de leur dévouement envers un travail de qualité."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Avatar>
                  <AvatarImage src="/Avatar.png" />
                  <AvatarFallback>CG</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>CGM</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Directeur CGM</div>
                </div>
              </figcaption>    
            </figure>
            <figure className={styles.figureClass}>
              <blockquote className="mx-auto mb-8 text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Service Sans Faille et Artisanat Expert</h3>
                <p className="my-4">"Notre expérience avec Techno System a été caractérisée par l'installation en douceur de notre service, grâce à leur équipe hautement professionnelle. Leur savoir-faire est vraiment exemplaire."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Avatar>
                  <AvatarImage src="/Avatar.png" />
                  <AvatarFallback>MZ</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Mzabi</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Group Mzabi</div>
                </div>
              </figcaption>    
            </figure>
            <figure className={styles.figureClass}>
              <blockquote className="mx-auto mb-8 text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Une Équipe digne de Confiance pour des Résultats Exceptionnels</h3>
                <p className="my-4">"Du début à la fin, Techno System a démontré un professionnalisme exceptionnel lors de l'installation de notre [produit/service]. Nous n'aurions pas pu demander une équipe plus fiable et compétente."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Avatar>
                  <AvatarImage src="/Avatar.png" />
                  <AvatarFallback>BM</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>BMB</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">BMB</div>
                </div>
              </figcaption>    
            </figure>
            <figure className={styles.figureClass}>
              <blockquote className="mx-auto mb-8 text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Établir la Norme de l'Excellence en Installation</h3>
                <p className="my-4">"Les installations ont été mises en place avec une nouvelle norme d'excellence. Le professionnalisme et l'expertise de leur équipe sont inégalés, et nous sommes extrêmement satisfaits des résultats."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Avatar>
                  <AvatarImage src="/Avatar.png" />
                  <AvatarFallback>RG</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Hotel Regency Gammaret</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">Hotel Regency Gammaret</div>
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