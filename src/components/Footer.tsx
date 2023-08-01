import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 border-t-2 border-t-red-500 flex items-center justify-between'>
			<Link href='/' className='font-bold text-xl uppercase'>
				cascio
			</Link>
			<p>© ALL RIGHTS RESERVED.</p>
		</footer>
	)
}

export default Footer
