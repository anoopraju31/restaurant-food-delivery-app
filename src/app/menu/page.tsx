import { menu } from '@/utills/menu'
import Link from 'next/link'
import React from 'react'

const MenuPage = () => {
	return (
		<section className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center'>
			{menu.map((category) => (
				<Link
					href={`/menu/${category.slug}`}
					key={category.id}
					className='w-full h-1/3 bg-cover py-8 md:h-1/2'
					style={{ backgroundImage: `url(${category.img})` }}>
					<div className={`text-${category.color} mx-8 w-1/2`}>
						<h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
						<p className='text-sm my-6'>{category.desc}</p>
						<button
							className={`hidden 2xl:block bg-black text-white py-2 px-4 rounded-md`}>
							Explore
						</button>
					</div>
				</Link>
			))}
		</section>
	)
}

export default MenuPage
