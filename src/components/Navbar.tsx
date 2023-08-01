import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<header className='w-full h-12 p-4 flex items-center justify-between border-b-2 border-b-red-500 text-red-500 uppercase'>
			{/* Logo */}
			<div className='text-xl'>
				<Link href='/'> Cacio </Link>
			</div>

			{/* Menu */}
			<div>Menu</div>
		</header>
	)
}

export default Navbar
