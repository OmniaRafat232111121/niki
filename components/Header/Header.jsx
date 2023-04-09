import React,{useState,useEffect} from 'react'
import Wrapper from '../Wrapper';
import Link from 'next/link';
import Menu from '../Menu';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';

const Header = () => {
    const [mobileMenu,setMobileMenu]=useState(false);
    const [showCatMenu,setShowCatMenu]=useState(false);
    const[lastScrollY,setScrollY]=useState(0);
    const [show,setShow]=useState("translate-y-0");
  return (
    <header className={`w-full h-[50px] md:h-[80px] sm:h-[100px]   bg-green flex items-center justify-between sticky z-20 top-0  transation-transform duration-300 ${show} `}>
        <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
                    <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
                </Link>
        </Wrapper>
        <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                  
                />
                <div className='flex items-center gap-2 text-black'>
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                        <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            51
                        </div>
                    </div>
                       {/* Icon start */}
                       <Link href="/cart">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <BsCart className="text-[15px] md:text-[20px]" />
                            
                        </div>
                    </Link>
                </div>
    </header>
  )
}

export default Header
