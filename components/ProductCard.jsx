import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
 <Link href="/product/1" className= '  mx-auto h-auto transform text-center  overflow-hidden duration-200  hover:scale-90 cursor-pointer'>
    <img className='w-[200px] h-auto mx-auto  mt-4 text-center' src="/p1.webp" alt="productImage"/>
 <div className='p-4 text-black/[0.9] '>
    <h2 className='text-lg font-medium'>Product Name</h2>
    <div className='p-4 text-black/[0.9]'>
        <p className='mr-2 text-lg font-semibold'>$20.00</p>
        <p className='line-through text-base font-medium'>$20.00</p>
        <p className='text-green-500 font-medium text-base ml-auto'>
            20% off
        </p>
    </div>

 </div>
 </Link>
  )
}

export default ProductCard
