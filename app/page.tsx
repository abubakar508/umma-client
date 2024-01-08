
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
    </div>
    )
}

export default page