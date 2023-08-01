import Image from 'next/image'
import React from 'react'
import { FeaturedCard } from '.'
import { featuredProducts } from '@/utills/featured'

const Featured = () => {
	return (
		<section className='overflow-x-auto featured text-red-500'>
			{/* Wrapper */}
			<div className='w-max'>
				{/* Single Featured Items */}
				{featuredProducts.map((product) => (
					<FeaturedCard key={product.id} {...product} />
				))}
			</div>
		</section>
	)
}

export default Featured
