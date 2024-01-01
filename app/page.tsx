
import Leadership from '@/components/Leadership'
import NewHero from '@/components/NewHero'
import Rating from '@/components/Rating'
import React from 'react'

//components


const page = () => {
  return (
    <div className=' font-montserrat bg-site bg-no-repeat bg-cover bg-fixed'>
      <NewHero />
       <Rating />
       <Leadership />
       {/* <SectionContent
      imageUrl={HoleBg}
      width={500}
      height={500}
      quality={100}
      imageStyles=' absolute top-[270px] w-[400px] h-[500px] lg:w-[700px] lg:h-[700px]'
       containerStyles=' h-screen relative flex flex-col items-center justify-between'
       textContainerStyles=' flex flex-col h-full w-full text-center items-center justify-center p-2 z-10'
       title='Umma Tech Hub'
       titleStyles=' text-5xl font-black text-neutral-900'
       descStyles=' text-neutral-600 font-medium tracking-wide w-full md:w-[500px]'
       desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quaerat eligendi ea fuga libero saepe error autem enim, quae temporibus, aperiam aut accusantium aspernatur. Voluptates labore nam dolorum nisi similique.'
       /> */}
       
    </div>
    )
}

export default page