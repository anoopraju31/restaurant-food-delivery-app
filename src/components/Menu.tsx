import { menuLinks } from '@/utills/links'
import Link from 'next/link'
import { BiMenuAltLeft } from 'react-icons/bi'

const Menu = () => {
	// ! Temporary User
	const user = null
	return (
		<div>
			{/* Menu Button */}
			<div className='text-3xl'>
				<BiMenuAltLeft />
			</div>

			<div className='absolute left-0 top-24 w-full h-[var(--menu-height-sm)] bg-red-500 text-white text-3xl flex flex-col gap-8 justify-center items-center z-10'>
				{menuLinks.map((item) => (
					<Link href={item.url} key={item.id}>
						{item.title}
					</Link>
				))}

				<Link href={user ? '/orders' : 'login'}>
					{user ? 'Orders' : 'Login'}
				</Link>
				<Link href='/cart'>CartIcon</Link>
			</div>
		</div>
	)
}

export default Menu
