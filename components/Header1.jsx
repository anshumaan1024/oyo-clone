import Image from 'next/image'
import Block from './Block'

const Header1 = () => {
  return (
    <div className=' flex justify-between border-b-2 border-gray-300 item-center h-24 px-10' >
      <Image src={'/logo.png'} alt='logo' width={200} height={200} className=' w-28 h-28' />
      <div className=' border-r-2 border-gray-300 h-full flex' >
        <Block title={'Become a member'} para={'Additional 10% off on stays'} />
        <Block title={'OYO for business'} para={'Trusted By 5000 corporates'} />
        <Block title={'List your property'} para={'Start earning in 30 min'} />
        <Block title={'9822764930'} para={'Call us to book now'} />
        <div className="flex items-center px-3 ">
          <Image src={'/demo.svg'} alt="demo" width={200} height={200} className=" w-10 h-10 rounded-full mr-5" />
          <h3 className='font-bold'>Login / Signup</h3>
        </div>
      </div>
    </div>

  )
}

export default Header1
