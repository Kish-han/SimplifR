import Headings from './Headings'
import Services from './Services'

type Props = {}

const OurServices = (props: Props) => {
  return (
    <div id='services' className=' mt-[250px] py-2 pt-10 md:mt-[150px] md:py-5 lg:mt-[50px] xl:mt-[0px] xl:py-2 '>
        <Headings head={"Our Services"} />
        <Services />
    </div>
  )
}

export default OurServices