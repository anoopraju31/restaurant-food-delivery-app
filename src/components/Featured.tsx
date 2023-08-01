import Image from 'next/image'
import React from 'react'
import { FeaturedCard } from '.'

const Featured = () => {
	return (
		<section className='overflow-x-auto featured text-red-500'>
			{/* Wrapper */}
			<div className='w-max'>
				{/* Single Featured Items */}
				<FeaturedCard />
			</div>
		</section>
	)
}

export default Featured
