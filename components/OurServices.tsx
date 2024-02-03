import React from 'react'
import Services from './Services'
import Headings from './Headings'

type Props = {}

const OurServices = (props: Props) => {
  return (
    <div id='services' className='h-[100vh]'>
        <Headings head={"Our Services"} subhead={"WHAT WE OFFER"} />
        <Services />
    </div>
  )
}

export default OurServices