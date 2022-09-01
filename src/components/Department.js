import React from 'react';
import app from '../img/app.svg'
import web from '../img/code.svg'
import ml from '../img/ml.svg'

export default function Department() {
  return (
    <>
    <div className='max-w-[1240px] mx-auto py-8' id='department'>
        <h1 className='flex justify-center md:text-4xl sm:text-3xl text-2xl font-bold pb-8'>Department</h1>
        <div className='md:grid grid-cols-2 mx-8 md:mx-4' >
        <div className='my-auto'>
                <img src={app} alt="/" className='w-[60%] md:w-[80%] md:h-[70%] h-[60%] my-auto mx-auto' />
            </div>
            <div className='mx-auto flex flex-col text-left my-auto'>
                <h1 className='md:text-2xl sm:text-1xl text-1xl font-bold md:py-2'>App Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui libero molestias ipsa corrupti ex omnis id voluptate temporibus, est deleniti nihil ab in vero exercitationem illum, veritatis pariatur! Aspernatur labore eum sapiente mollitia impedit perferendis, et obcaecati veritatis minima ullam explicabo eveniet temporibus alias id repellat neque provident consequatur!</p>
            </div>
            
        </div>
        <div className='md:grid grid-cols-2 mx-8 md:mx-4' >
        
            <div className='mx-auto flex flex-col justify-center my-auto text-left float-right md:float-left'>
                <h1 className='md:text-2xl sm:text-1xl text-xl font-bold md:py-2'>Web Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui libero molestias ipsa corrupti ex omnis id voluptate temporibus, est deleniti nihil ab in vero exercitationem illum, veritatis pariatur! Aspernatur labore eum sapiente mollitia impedit perferendis, et obcaecati veritatis minima ullam explicabo eveniet temporibus alias id repellat neque provident consequatur!</p>
            </div>
            <div className='my-auto md:float-right'>
                <img src={web} alt="/" className='w-[60%] md:w-[80%] md:h-[70%] h-[60%] my-auto mx-auto' />
            </div>
            
        </div>
        <div className='md:grid grid-cols-2 mx-8 md:mx-4 ' >
        <div className='my-auto'>
                <img src={ml} alt="/" className='w-[60%] md:w-[70%] md:h-[70%] h-[60%] my-auto mx-auto' />
            </div>
            <div className='mx-auto flex flex-col justify-center text-left my-auto'>
                <h1 className='md:text-2xl sm:text-xl text-xl font-bold md:py-2'>Machine Learning</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui libero molestias ipsa corrupti ex omnis id voluptate temporibus, est deleniti nihil ab in vero exercitationem illum, veritatis pariatur! Aspernatur labore eum sapiente mollitia impedit perferendis, et obcaecati veritatis minima ullam explicabo eveniet temporibus alias id repellat neque provident consequatur!</p>
            </div>
            
        </div>

      
    </div>
      
    </>
  )
}
