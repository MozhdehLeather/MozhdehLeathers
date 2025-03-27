import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At Mozhdeh Leather, we believe in creating more than just leather products—we create stories, experiences, and a lasting impact. Our journey began in 2013 with a simple idea: to craft high-quality, durable leather accessories while making a difference in the world.</p>
              <p>Every wallet, bag, and belt we make carries a purpose. We take pride in our ethical sourcing, ensuring that every piece is crafted with care, precision, and respect for both craftsmanship and nature. But what truly sets us apart is our commitment to giving back—60% of our profits go toward helping stray animals, providing them with food, shelter, and medical care.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>We’re here to redefine quality and purpose in the leather industry. Our goal is simple: create timeless, durable products that customers love while supporting a cause that matters. With every purchase, you’re not just buying a product—you’re becoming part of a movement that values sustainability, compassion, and craftsmanship.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
