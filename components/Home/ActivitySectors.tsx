import ActivitiesCard from '../ActivitiesCard'
import ScrollAnimation from '../ScrollAnimation'
import ReferenceList from './ReferenceList'
import { getActivitieslList } from '@/sanity/actions'
import LoadingSpinner from '../icons/LoadingSpinner'

const styles = {
  title:"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white capitalize",
  subTitle:"mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
}

export const revalidate = 86400;

const ActivitySectors = async () => {
  const activites:IActivity[]  = await getActivitieslList()
  
  return (
    <section id='activities' className='flex flex-col items-center justify-center w-full p-4 min-h-[calc(100vh-80px)] bgb'>
      <div className='flex w-full h-full justify-center'>
        <ScrollAnimation/>
        <div className='flex flex-1 flex-col items-center justify-center gap-4 m-4 max-w-[1460px] md:px-16'>
          <div className='flex flex-col items-center justify-center w-full p-4 gap-4 text-center'>
            <div className='flex flex-col items-center w-full '>
              <h1 className={styles.title}>secteurs d'activité</h1>
            </div>
            <p className={styles.subTitle}>Depuis le début, nous nous efforçons de construire une solide expérience dans domaines multiple</p>
          </div>
          <ul className='flex flex-wrap justify-center gap-8'>
            {activites.length > 0 ? activites.map((activity:IActivity, index:number)=>(
              <ActivitiesCard key={activity._id} activityName={activity.activityName} activityDescription={activity.activityDescription} activityImage={activity.image} index={index}/>
            )):
            <LoadingSpinner/>
          }
          </ul>
        </div>
      </div>
      <ReferenceList/>
    </section>    
  )
}

export default ActivitySectors