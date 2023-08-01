type Menu = {
	id: number
	slug: string
	title: string
	desc?: string
	img?: string
	color: string
}[]

export const menu: Menu = [
	{
		id: 1,
		slug: 'pastas',
		title: 'Italian Pastas',
		desc: 'Savor the taste of perfection with our exquisite Italian handmade pasta menu.',
		img: '/featured/m1.png',
		color: 'white',
	},
	{
		id: 2,
		slug: 'burgers',
		title: 'Juicy Burgers',
		desc: 'Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.',
		img: '/featured/m2.png',
		color: 'black',
	},
	{
		id: 3,
		slug: 'pizzas',
		title: 'Cheesy Pizzas',
		desc: 'Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.',
		img: '/featured/m3.png',
		color: 'white',
	},
]
