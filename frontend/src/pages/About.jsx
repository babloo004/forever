import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to FOREVR, where passion meets quality and style. Founded with a vision to bring the best fashion and lifestyle products to your doorstep, we are committed to offering an exceptional shopping experience tailored just for you.</p>
          <p>At FOREVER, we believe in more than just selling products—we believe in helping you express your individuality through carefully curated collections for Men, Women, and Kids. Our unique range spans from trendy topwear to comfortable bottomwear and cozy winter essentials, all designed with you in mind.t</p>
          <p>Transparency, integrity, and customer satisfaction are at the heart of all we do. We partner with trusted suppliers to ensure every item meets our rigorous standards for quality and value. Our user-friendly platform, quick delivery, and responsive support team ensure that shopping with us is not only enjoyable but reliable.</p>
          <p>Whether you are refreshing your wardrobe or searching for the perfect gift, FOREVER is here to make your choices easy and excellent. Thank you for trusting us to be a part of your style journey.</p>
          <p>Stay connected with us through our newsletter for the latest arrivals, exclusive discounts, and style inspiration!</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>Our quality control team conducts regular inspections and uses both automated systems and manual checks to maintain high standards. From verifying product specifications and authenticating materials to monitoring packaging and delivery processes, we leave no stone unturned.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Conveience:</b>
          <p>Our intuitive navigation and powerful search features help you find exactly what you're looking for quickly, whether you're on desktop or mobile. Use filters to narrow down options by size, category, price, and more so you can shop efficiently without hassle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>We go beyond just responding to questions; we aim to understand your needs and deliver personalized solutions. With multiple support channels including chat, email, and phone, we ensure you can reach us effortlessly whenever you need.</p>
        </div>
      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default About
