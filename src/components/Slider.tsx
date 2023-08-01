import Image from 'next/image'
import React from 'react'

const Slider = () => {
	return (
		<section className='h-[var(--slider-height-sm)] md:h-[var(--slider-height-lg)] flex flex-col lg:flex-row bg-red-50'>
			{/* Text Container */}
			<div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
				<h1 className='p-4 md:p-10 text-5xl md:text-6xl xl:text-7xl text-center uppercase '>
					{' '}
					title{' '}
				</h1>
				<button className='py-4 px-8 bg-red-500 text-white'> Order Now </button>
			</div>

			{/* Image Container */}
			<div className='w-full flex-1 relative'>
				<Image src='/slider/slide1.png' alt='' fill className='object-cover' />
			</div>
		</section>
	)
}

export default Slider
