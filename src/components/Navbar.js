import React, {useState} from 'react';
// import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
// import {
//     FontAwesomeIcon,FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare
//   } from 'react-icons/fa';

const Navbar = () => {
    let Links =[
        {name: "HOME", link: "/"},
        {name: "ABOUT", link: "#about"},
        {name: "DEPERTMENT", link: "#department"},
        {name: "TEAM", link: "#team"},
        {name: "CONTACT", link: "/"},
    ]
    const [open, setOpen] = useState(false)
  return (
   
    <>
     <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div>
                <h1 className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-[#302b63]'>CodeHacX</h1>
            </div>
            <div onClick={()=> setOpen(!open)} className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                {Links.map((link)=>(
                <li key={link.name} className='md:ml-8 md:my-0 my-7'>
                    <a href={link.link} className="hover:text-[#302b63] duration-500">{link.name}</a>
                </li>
                ))}
                <button className='bg-[#302b63] text-white md:ml-8 py-2 px-4 rounded-xl hover:bg-blue-900 duration-500'>Join</button>
            </ul>
        </div>
            </div> 
    </>
  )
}

export default Navbar
