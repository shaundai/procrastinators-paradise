import './ProductCard.css'

type ProductCardProps = {
	description: string
	name: string
	price: number
	procrastinatorLevel: string
}

export const ProductCard = ({
	description,
	name,
	price,
	procrastinatorLevel,
}: ProductCardProps) => {
	return (
		<li className='card'>
			<div className='procrastinator-level'>{procrastinatorLevel}</div>
			<div className='name'>{name}</div>
			<div className='description'>{description}</div>
			<div className='price'>{price}</div>
			<button>Add to Cart</button>
		</li>
	)
}
