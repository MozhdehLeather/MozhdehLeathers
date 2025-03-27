import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Mozhdeh Leather</p>
          <p className=' text-gray-500'>Soft to the touch,  strong for a lifetime. <br />
          Every stitch, a mark of passion.<br /> Every piece, a story waiting to be told. <br />
          This is more than leather—it’s you.</p>
          <p className=' text-gray-500'>Tel: +1 (973) 417-3283 <br /> Email: mozhdeh.leather@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Custom Orders</p>
          <p className=' text-gray-500'> Looking for personalized leather products? Let’s create something unique for you!</p>
          <button 
  className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500' 
  onClick={() => window.location.href = 'https://mozhdehleather.com/custom/?'}>
  Request Custom Design
</button>

        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
