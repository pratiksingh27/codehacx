import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import avatar from '../img/avatar.svg';



// const data =[
//     {
//         id: 1,
//         username: 'Mudit',
//         Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui libero molestias ipsa'
//     },
//     {
//         id: 2,
//         username: 'Pratik',
//         Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui libero molestias ipsa'
//     },
//     {
//         id: 3,
//         username: 'Mudit',
//         Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui libero molestias ipsa'
//     },
//     {
//         id: 4,
//         username: 'Pratik',
//         Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui libero molestias ipsa'
//     },
//     {
//         id: 5,
//         username: 'Mudit',
//         Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui libero molestias ipsa'
//     },
//     {
//         id: 6,
//         username: 'Pratik',
//         Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui libero molestias ipsa'
//     }
// ]

export default function Team() {
  return (
    <>
    <div className='pb-16 max-w-[1240px] mx-auto' id='team'>
      <h1 className='flex justify-center md:text-3xl text-xl font-bold'>Our Team</h1>
    
<Splide
      options={ {
        rewind: true,
        gap   : '1rem',
        perPage: 3,
        breakpoints: {
            450: {
              perPage: 1,
        
            },
            767: {
              perPage: 2,
          
            },
          },
      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide className='py-8 pl-2'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white rounded-full' src={avatar} alt="img" />
            <h2 className='font-bold text-xl text-center py-4'>Mudit</h2>
            <p className='flex pb-2 space-x-1 justify-center'>Founder</p>
            <p className='text-left'>Pay through our application and save thousands and get amazing rewards</p>
            {/* <button className='text-center bg-[#B00E15] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black'>Explore</button> */}
          </div>
      </SplideSlide>
      <SplideSlide className='py-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white rounded-full' src={avatar} alt="img" />
            <h2 className='font-bold text-xl text-center py-4'>Pratik Singh</h2>
            <p className='flex pb-2 space-x-1 justify-center'>Founder</p>
            <p className='text-left'>Pay through our application and save thousands and get amazing rewards</p>
            {/* <button className='text-center bg-[#B00E15] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black'>Explore</button> */}
          </div>
      </SplideSlide>
      <SplideSlide className='py-8 pr-2'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white rounded-full' src={avatar} alt="img" />
            <h2 className='font-bold text-xl text-center py-4'>Rahul Dhote</h2>
            <p className='flex space-x-1 pb-2 justify-center'>Co-founder</p>
            <p className='text-left'>Pay through our application and save thousands and get amazing rewards</p>
            {/* <button className='text-center bg-[#B00E15] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black'>Explore</button> */}
          </div>
      </SplideSlide>
      <SplideSlide className='py-8 pl-2'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white rounded-full' src={avatar} alt="img" />
            <h2 className='font-bold text-xl text-center py-4'>Rahul Dhote</h2>
            <p className='flex pb-2 space-x-1 justify-center'>hello</p>
            <p className='text-left'>Pay through our application and save thousands and get amazing rewards</p>
            {/* <button className='text-center bg-[#B00E15] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black'>Explore</button> */}
          </div>
      </SplideSlide>
      <SplideSlide className='py-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white rounded-full' src={avatar} alt="img" />
            <h2 className='font-bold text-xl text-center py-4'>Rahul Dhote</h2>
            <p className='flex pb-2 space-x-1 justify-center'>hello</p>
            <p className='text-left'>Pay through our application and save thousands and get amazing rewards</p>
            {/* <button className='text-center bg-[#B00E15] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black'>Explore</button> */}
          </div>
      </SplideSlide>
      <SplideSlide className='py-8 pr-2'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-black'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white rounded-full' src={avatar} alt="img" />
            <h2 className='font-bold text-xl text-center py-4'>Rahul Dhote</h2>
            <p className='flex pb-2 space-x-1 justify-center'>hello</p>
            <p className='text-left'>Pay through our application and save thousands and get amazing rewards</p>
            {/* <button className='text-center bg-[#B00E15] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black'>Explore</button> */}
          </div>
      </SplideSlide>
    </Splide>
    </div>
    </>
  )
}
