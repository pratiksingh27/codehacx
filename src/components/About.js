import React from 'react';
import about from '../img/about.svg'

export default function About() {
  return (
    <div className='max-w-[1240px] mx-auto' id='about'>
        <div className='md:grid grid-cols-2'>
            <div className='mx-auto flex flex-col justify-center text-left'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-2'>Knows us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui libero molestias ipsa corrupti ex omnis id voluptate temporibus, est deleniti nihil ab in vero exercitationem illum, veritatis pariatur! Aspernatur labore eum sapiente mollitia impedit perferendis, et obcaecati veritatis minima ullam explicabo eveniet temporibus alias id repellat neque provident consequatur!</p>
            </div>
            <div>
                <img src={about} alt="/" className='w-[60%] md:w-[90%] md:h-[80%] h-[60%] my-auto mx-auto' />
            </div>
        </div>
      
    </div>
  )
}
