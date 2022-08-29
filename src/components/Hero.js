import React from 'react';
import Typed from 'react-typed';

export default function Hero() {
  return (
    <>
      <div className="max-w-[1240px] mx-auto">
        <div className='md:grid'>
        <div className='max-w-[800px] w-full h-screen mx-auto flex text-center flex-col justify-center'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-2'>CodeHacX</h1>
        <pre className='text-[#302b63] font-bold p-2'> &lt; Think it || Create it || <br></br> Work on it || And make it happen /&gt; </pre>
        
        <div className='flex justify-center items-center pt-1'>
          <p className='md:text-2xl sm:text-1.5xl text-xl font-bold'>We Provide </p>
          <Typed className='md:text-2xl sm:text-1.5xl text-xl font-bold pl-2' strings={[' Best learning','Best services', 'Best opportunites']} typeSpeed={30} backSpeed={50} loop/>
        </div>
        <div className='mt-4'>
        <button className='bg-[#302b63] text-white md:ml-8 py-2 px-4 rounded-xl hover:bg-blue-900 duration-500 w-1/4'>Discord</button>
        <button className='bg-[#302b63] text-white md:ml-8 py-2 px-4 rounded-xl hover:bg-blue-900 duration-500 w-1/4'>Telegram</button>
        </div>
      </div>
            {/* <div className='w-[500px] h-[500px] border'>
                
            </div> */}
        </div>
      </div>
    </>
  )
}
