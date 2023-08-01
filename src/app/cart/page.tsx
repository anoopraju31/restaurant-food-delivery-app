import Image from 'next/image'
import React from 'react'

const CartPage = () => {
	return (
		<section className='h-[var(--menu-height-sm)] md:h-[var(--slider-height-lg)] py-10 px-4 lg:px-20 xl:px-40 flex flex-col lg:flex-row gap-8 text-red-500'>
			{/*  Products Container */}
			<div className='lg:w-2/3 2xl:w-1/2 h-[var(--order-height-lg)]  orders overflow-y-auto'>
				{/* SINGLE ITEM */}
				<div className='w-full p-4 flex items-center justify-between odd:bg-fuchsia-50'>
					<Image src='/featured/p1.png' alt='' width={100} height={100} />
					<div className=''>
						<h1 className='uppercase text-xl font-bold'>sicilian</h1>
						<span>Large</span>
					</div>
					<h2 className='font-bold'>$79.90</h2>
					<span className='cursor-pointer'>X</span>
				</div>
				{/* SINGLE ITEM */}
				<div className='w-full p-4 flex items-center justify-between odd:bg-fuchsia-50'>
					<Image src='/featured/p1.png' alt='' width={100} height={100} />
					<div className=''>
						<h1 className='uppercase text-xl font-bold'>sicilian</h1>
						<span>Large</span>
					</div>
					<h2 className='font-bold'>$79.90</h2>
					<span className='cursor-pointer'>X</span>
				</div>

				{/* SINGLE ITEM */}
				<div className='w-full p-4 flex items-center justify-between odd:bg-fuchsia-50'>
					<Image src='/featured/p1.png' alt='' width={100} height={100} />
					<div className=''>
						<h1 className='uppercase text-xl font-bold'>sicilian</h1>
						<span>Large</span>
					</div>
					<h2 className='font-bold'>$79.90</h2>
					<span className='cursor-pointer'>X</span>
				</div>

				{/* SINGLE ITEM */}
				<div className='w-full p-4 flex items-center justify-between odd:bg-fuchsia-50'>
					<Image src='/featured/p1.png' alt='' width={100} height={100} />
					<div className=''>
						<h1 className='uppercase text-xl font-bold'>sicilian</h1>
						<span>Large</span>
					</div>
					<h2 className='font-bold'>$79.90</h2>
					<span className='cursor-pointer'>X</span>
				</div>

				{/* SINGLE ITEM */}
				<div className='w-full p-4 flex items-center justify-between odd:bg-fuchsia-50'>
					<Image src='/featured/p1.png' alt='' width={100} height={100} />
					<div className=''>
						<h1 className='uppercase text-xl font-bold'>sicilian</h1>
						<span>Large</span>
					</div>
					<h2 className='font-bold'>$79.90</h2>
					<span className='cursor-pointer'>X</span>
				</div>

				{/* SINGLE ITEM */}
				<div className='w-full p-4 flex items-center justify-between odd:bg-fuchsia-50'>
					<Image src='/featured/p1.png' alt='' width={100} height={100} />
					<div className=''>
						<h1 className='uppercase text-xl font-bold'>sicilian</h1>
						<span>Large</span>
					</div>
					<h2 className='font-bold'>$79.90</h2>
					<span className='cursor-pointer'>X</span>
				</div>
			</div>

			{/* PAYMENT CONTAINER */}
			<div className='p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center items-stretch lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-10  2xl:text-xl 2xl:gap-6'>
				<div className='w-full flex justify-between'>
					<span className=''>Subtotal (3 items)</span>
					<span className=''>$81.70</span>
				</div>
				<div className='flex justify-between'>
					<span className=''>Service Cost</span>
					<span className=''>$0.00</span>
				</div>
				<div className='flex justify-between'>
					<span className=''>Delivery Cost</span>
					<span className='text-green-500'>FREE!</span>
				</div>
				<hr className='my-2' />
				<div className='flex justify-between'>
					<span className=''>TOTAL(INCL. VAT)</span>
					<span className='font-bold'>$81.70</span>
				</div>
				<button className='bg-red-500 text-white p-3 rounded-md self-end'>
					CHECKOUT
				</button>
			</div>
		</section>
	)
}

export default CartPage
