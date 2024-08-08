export const SuccessBanner = ({ productAdded }: { productAdded: string[] }) => {
	return (
		<div className='success'>
			{`You have successfully added ${productAdded} to cart`}
		</div>
	)
}
