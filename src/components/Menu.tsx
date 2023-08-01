'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BiMenuAltLeft } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'

import { menuLinks } from '@/utills/links'
import { CartIcon } from '.'

const Menu = () => {
	const [open, setOpen] = useState(false)

	// ! Temporary User
	const user = null
	return (
		<div>
			{/* Menu Button */}
			<div className='text-3xl' onClick={() => setOpen((prev) => !prev)}>
				{!open ? <BiMenuAltLeft /> : <IoCloseOutline />}
			</div>

			{open ? (
				<div className='absolute left-0 top-24 w-full h-[var(--menu-height-sm)] bg-red-500 text-white text-3xl flex flex-col gap-8 justify-center items-center z-10'>
					{menuLinks.map((item) => (
						<Link href={item.url} key={item.id}>
							{item.title}
						</Link>
					))}

					<Link href={user ? '/orders' : 'login'}>
						{user ? 'Orders' : 'Login'}
					</Link>
					<Link href='/cart'>
						<CartIcon />
					</Link>
				</div>
			) : null}
		</div>
	)
}

export default Menu
