import React from 'react'
import Services from './Services'
import Headings from './Headings'

type Props = {}

const OurServices = (props: Props) => {
  return (
    <div>
        <Headings head={"Our Services"} subhead={"WHAT WE OFFER"} />
        <Services />
    </div>
  )
}

export default OurServices