import { Category } from '@/utills/menu'
import Link from 'next/link'

type Props = {
	category: Category
}

const CategoryCard = ({ category }: Props) => {
	return (
		<Link
			href={`/menu/${category.slug}`}
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
	)
}

export default CategoryCard
