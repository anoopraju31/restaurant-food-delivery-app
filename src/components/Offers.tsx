import Image from 'next/image'
import React from 'react'

const Offers = () => {
	return (
		<section className="h-screen md:h-[70vh] flex flex-col md:flex-row md:justify-between bg-black  md:bg-[url('/offer/offerBg.png')]">
			{/* Text Containe */}
			<div className='flex-1 p-6 flex flex-col justify-center items-center gap-8 text-center'>
				<h1 className='text-white text-5xl xl:text-6xl font-bold'>
					{' '}
					Delicious Burger & French Fry{' '}
				</h1>
				<p className='text-white xl:text-xl'>
					Progressively simplify effective e-toilers and process-centric methods
					of empowerment. Quickly pontificate parallel.
				</p>
				{/* count doun */}
				<button className='py-3 px-6 bg-red-500 text-white rounded-md'>
					Order Now
				</button>
			</div>

			{/* Image Container */}
			<div className='flex-1 w-full relative md:h-full'>
				<Image
					src='/offer/offerProduct.png'
					alt=''
					fill
					className='object-contain px-8'
				/>
			</div>
		</section>
	)
}

export default Offers
