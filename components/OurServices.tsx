import Headings from './Headings'
import Services from './Services'

type Props = {}

const OurServices = (props: Props) => {
  return (
    // <div id='services' className='h-[90vh] md:h-[88vh] mt-[250px] md:mt-[200px] lg:mt-[100px] xl:mt-0 py-14 md:py-8'>
    <div id='services' className=' mt-[250px] py-2 md:mt-[150px] md:py-5 lg:mt-[50px] xl:mt-[0px] xl:py-2 '>
        <Headings head={"Our Services"} />
        <Services />
    </div>
  )
}

export default OurServices