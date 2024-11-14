import {MailIcon , HomeIcon , PhoneCall} from 'lucide-react';
import Form from '@/components/Form';
const  Contact= () => {
  return (
   <section>
    <div className='container mx-auto p-5'>

<div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
 <div className='flex flex-col justify-center'>
  <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
  <span className='w-[30px] h-[2px] bg-primary'></span>
  <div>Assalam O Alaikum👋</div>
 </div>
 <h1 className='text-5xl mb-8 max-w-md font-bold'>Let's Work Together.</h1>
 <p className='subtitle max-w-[400px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestiae neque laboriosam, quibusdam optio accusamus!</p>
</div>
<div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>

</div>

<div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
 <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
  <div className='flex items-center gap-x-8'>
    <MailIcon size={18} className='text-primary'/>
    <div>zh7774440@gmail.com</div>
  </div>
  <div className='flex items-center gap-x-8'>
    <HomeIcon size={18} className='text-primary'/>
    <div>Karachi, Sindh, Pakistan</div>
  </div>
  <div className='flex items-center gap-x-8'>
    <PhoneCall size={18} className='text-primary'/>
    <div>+92-3202727926</div>
  </div>

 </div>

<Form />
</div>
    </div>
   </section>
  )
}

export default Contact;