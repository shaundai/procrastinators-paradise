import './ProductRow.css'
import { ProductCard } from './ProductCard'

export const ProductRow = ({ list }: any) => {
	return (
		<ul className='row'>
			{list.map((item, index) => (
				<ProductCard
					key={`${item?.name}-${index}`}
					description={item?.description}
					name={item?.name}
					price={item?.price}
					procrastinatorLevel={item?.procrastinator_level}
				/>
			))}
		</ul>
	)
}
