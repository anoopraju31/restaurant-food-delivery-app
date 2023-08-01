import Link from 'next/link'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Menu from './Menu'
import { CartIcon } from '.'

const Navbar = () => {
	// ! Temporary User
	const user = null

	return (
		<header className='w-full h-12 md:h-24 p-4 lg:px-20 xl:px-40 flex items-center justify-between border-b-2 border-b-red-500 text-red-500 uppercase'>
			{/* Left Links */}
			<div className='hidden flex-1 md:flex gap-4'>
				<Link href='/'>Homepage</Link>
				<Link href='/menu'>Menu</Link>
				<Link href='/'>Contact</Link>
			</div>

			{/* Logo */}
			<div className='text-xl md:font-bold md:text-center '>
				<Link href='/'> Cacio </Link>
			</div>

			{/* Menu */}
			<div className='md:hidden'>
				<Menu />
			</div>

			{/* Right Links */}
			<div className='hidden flex-1 md:flex gap-4 justify-end items-center'>
				<div className='md:absolute top-3 r-2 xl:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
					<BsFillTelephoneFill />
					<span> +91 8913 222 749 </span>
				</div>

				<Link href={user ? '/login' : '/orders'}>
					{' '}
					{user ? 'Login' : 'Orders'}{' '}
				</Link>

				<CartIcon />
			</div>
		</header>
	)
}

export default Navbar
