'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { slideData } from '@/utills/slides'

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const interval = setInterval(
			() => setCurrentSlide((prev) => (prev + 1) % slideData.length),
			4000,
		)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<section className='h-[var(--slider-height-sm)] md:h-[var(--slider-height-lg)] flex flex-col lg:flex-row bg-red-50'>
			{/* Text Container */}
			<div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
				<h1 className='p-4 md:p-10 text-5xl md:text-6xl xl:text-7xl text-center uppercase'>
					{slideData[currentSlide].title}
				</h1>
				<button className='py-4 px-8 bg-red-500 text-white'> Order Now </button>
			</div>

			{/* Image Container */}
			<div className='w-full flex-1 relative'>
				<Image
					src={slideData[currentSlide].image}
					alt=''
					fill
					className='object-cover'
				/>
			</div>
		</section>
	)
}

export default Slider
