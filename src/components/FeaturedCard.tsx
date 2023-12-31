import Image from 'next/image'
import React from 'react'

type Props = {
	id: number
	title: string
	desc: string
	img: string
	price: number
}

const FeaturedCard = ({ id, title, desc, img, price }: Props) => {
	return (
		<div className='w-screen md:w-[50vw] xl:w-[33vw] h-[60vh] xl:h-[90vh] inline-flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300'>
			{/* Image Container */}
			<div className='relative px-6 flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
				<Image
					src={img}
					alt=''
					fill
					className='object-contain pointer-events-none'
				/>
			</div>

			{/* Text Container */}
			<div className='flex-1 flex flex-col items-center justify-center text-center gap-4'>
				<h1 className='text-xl xl:text-2xl 2xl:text-3xl font-bold uppercase'>
					{title}
				</h1>
				<p className='p-4 2xl:p-8'> {desc} </p>
				<span className='text-xl font-bold'> {price}</span>
				<button className='bg-red-500 text-white p-2 rounded-md'>
					{' '}
					Add to Cart{' '}
				</button>
			</div>
		</div>
	)
}

export default FeaturedCard
