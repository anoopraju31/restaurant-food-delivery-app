import CategoryCard from '@/components/CategoryCard'
import { menu } from '@/utills/menu'
import React from 'react'

const MenuPage = () => {
	return (
		<section className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center'>
			{menu.map((category) => (
				<CategoryCard key={category.id} category={category} />
			))}
		</section>
	)
}

export default MenuPage
