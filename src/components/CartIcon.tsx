import Link from 'next/link'
import { BsFillBasket3Fill } from 'react-icons/bs'

const CartIcon = () => {
	return (
		<Link href='/cart' className='flex items-center gap-2'>
			<div className='relative w-8 h-8 md:w-5 md:h-5'>
				<BsFillBasket3Fill />
			</div>
			<span>Cart (0)</span>
		</Link>
	)
}

export default CartIcon
