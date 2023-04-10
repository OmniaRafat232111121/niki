import React from 'react'
import Wrapper from '../../../components/Wrapper'
import ProductDetailsCarsoul from '../../../components/ProductDetailsCarsoul'
import { IoMdHeartEmpty } from 'react-icons/io'
import RelatedProducts from '../../../components/RelatedProducts'

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        
        <div className=' flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
        <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
       <ProductDetailsCarsoul/>
        </div>
        
        <div className='flex-[1] py-3'>
            <div className='text-[34px] font-semibold mb-2'>
                Jordan Retro 6 G
            </div>
            <div className=' font-semibold text-lg mb-5'>
                Men & Golf Shoes
            </div>
            <div className='text-lg font-semibold'> 
              MRP:$19 695.00
            </div>
            <div className='text-md font-medium text-black/[0.5]'>
                incl. of taxes
            </div>
            <div className='text-md font-medium text-blac/[0.5] mb-20'>
           {` (Also includes all applicable duties)`}


            </div>
            <div className='mb-10'>
       <div className='flex justify-between mb-2'>
     <div className='text-md font-semibold'>
    select Size
     </div>
     <div className='text-md font-semibold'>
    select Guide
     </div>
     

       </div>
        </div>
        <div className='grid grid-cols-4 gap-3'>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 6
</div>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 6.5
</div>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 7
</div>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 7.5
</div>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 8
</div>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 8.5
</div>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 9
</div>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 9.5
</div>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 10
</div>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 10.5
</div>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 11
</div>
<div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
UK 11.5
</div>


        </div>
        <div className='text-red-600 mt-1'>
          Size Selection is required
        </div>
        <button className='w-full py-4 rounded-full  bg-black text-white text-lg font-medium transation-transform 
        active:scale-95 flex items-center justify-center gap-2 hover:bg-white hover:text-black hover:opacity-90 mb-10 mt-4'> Add to Cart</button>
 <button className='w-full py-4 rounded-full  bg-white text-black text-lg font-medium transation-transform 
        active:scale-95 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:opacity-70 mb-10'>
        <IoMdHeartEmpty size={20}/>   wishlist
           </button>
           <div className='text-lg font-bold'>
             product Details
           </div>
           <div className='text-md mb-5'>
           "Russell Westbrook's 6th signature shoe is—you guessed it—all about speed. To get you goin' as fast as possible, we've wrapped the rubber outsole nearly up to the midsole, so you're not gonna slip when you explode from 0 to 100. Added security comes from the interior bootie that keeps you strapped in as you jet across the court. It's all held together by an outer shroud and fastened with a zip collar that spells out Russell's signature question: ""Why Not?""

           </div>
        </div>
       
        </div>
          <RelatedProducts/>
      </Wrapper>
    </div>
  )
}

export default ProductDetails
