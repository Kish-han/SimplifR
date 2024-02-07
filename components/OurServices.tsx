import React from 'react'
import Services from './Services'
import Headings from './Headings'

type Props = {}

const OurServices = (props: Props) => {
  return (
    <div id='services' className='h-[100vh] mt-[50px] md:mt-[0px]'>
        <Headings head={"Our Services"} />
        <Services />
    </div>
  )
}

export default OurServices