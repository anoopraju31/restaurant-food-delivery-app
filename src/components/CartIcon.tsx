import { BsFillBasket3Fill } from 'react-icons/bs'

const CartIcon = () => {
	return (
		<div className='flex items-center gap-4'>
			<div className='relative w-8 h-8 md:w-5 md:h-5'>
				<BsFillBasket3Fill />
			</div>
			<span>Cart (0)</span>
		</div>
	)
}

export default CartIcon
