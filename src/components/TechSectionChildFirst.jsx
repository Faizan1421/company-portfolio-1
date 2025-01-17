import Image from 'next/image'
import React from 'react'
import Button from './Button'
import BackgroundEffects from './BackgroundEffects'

const TechSectionChildFirst = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2  gap-4 min-h-[353px] relative '>
         <BackgroundEffects className="-top-[100px] -right-[100px]"/>
        {/* left section */}
         <div className='flex w-full '>
         <div className='w-[50%] h-full  flex justify-center sm:justify-start items-start'>
            <Image src="/ailogo.svg" alt="Ai" width={240} height={340} className='~w-[110px]/[240px] ~h-[200px]/[340px]' />
         </div>
         <div className='w-[50%] h-full  flex flex-col justify-center gap-4 items-start  sm:items-center md:items-start'>
            <Button text="Tech" className="text-primary-600 font-normal  bg-opacity-30"/>
            <h1 className='max-w-[210px] ~text-[16px]/[40px] leading-tight'>Designs That Drive Innovation</h1>
         </div>
         </div>
         {/* Right Section */}
         <div className='flex flex-col sm:flex-row gap-4 sm:gap-0  w-full items-center ' >
            <div  className=''>
                <Image priority src="https://placehold.co/400" alt='Ai-Image' width={240} height={340} className='h-full min-w-[341px] object-cover' />
                
            </div>
            <div className='flex flex-col justify-center items-center  xl:items-end gap-4 w-full '>
                <Button text="Try Now" filled />
                <Button text="Buy AI Now" outline />
            </div>
         </div>
    </div>
  )
}

export default TechSectionChildFirst