type Product = {
	id: number
	title: string
	desc?: string
	img?: string
	price: number
	options?: { title: string; additionalPrice: number }[]
}

type Products = Product[]

export const products: Products = [
	{
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
	},
	{
		id: 2,
		title: 'Mediterranean Delight',
		desc: 'Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.',
		img: '/featured/p8.png',
		price: 32.9,
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
	},
	{
		id: 3,
		title: 'Bella Napoli',
		desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
		img: '/featured/p3.png',
		price: 26.9,
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
	},
	{
		id: 4,
		title: 'Pesto Primavera',
		desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
		img: '/featured/p10.png',
		price: 28.9,
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
	},
	{
		id: 5,
		title: 'Veggie Supreme',
		desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
		img: '/featured/p11.png',
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
	},
	{
		id: 6,
		title: 'Four Cheese Fantasy',
		desc: 'Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.',
		img: '/featured/p12.png',
		price: 22.9,
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
	},
]
