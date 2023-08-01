type Product = {
	id: number
	title: string
	desc: string
	img: string
	price: number
	options?: { title: string; additionalPrice: number }[]
}

export const singleProduct: Product = {
	id: 1,
	title: 'Sicilian',
	desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
	img: '/featured/p1.png',
	price: 24.9,
	options: [
		{
			title: 'Small',
			additionalPrice: 0,
		},
		{
			title: 'Medium',
			additionalPrice: 4,
		},
		{
			title: 'Large',
			additionalPrice: 6,
		},
	],
}
