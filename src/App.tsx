import './App.css'

import { ProductRow } from './components/ProductRow'

import {
	InstantSearch,
	RelatedProducts,
	SearchBox,
	useHits,
} from 'react-instantsearch'
import { searchClient } from './client'
import { ProductCard } from './components/ProductCard'

function App() {
	function NumericMenu() {
		const { results } = useHits({})

		const shownList = results?.hits?.slice(0, 4)
		const resultHitsIds = shownList
			? shownList?.map(result => {
				return result.objectID
			})
			: []

			const Item = ({ item }) => {
			const { description, name, price, procrastinator_level } = item
			return (
				<ProductCard
					description={description}
					name={name}
					price={price}
					procrastinatorLevel={procrastinator_level}
				/>
			)
		}

		return (
			<section>
				<section className='products'>
					<ProductRow list={shownList} />
						<>
							<div className='row-other'>
								<RelatedProducts
									objectIDs={resultHitsIds}
									itemComponent={Item}
									limit={4}
								/>
							</div>
						</>
				</section>
			</section>
		)
	}

	return (
		<>
			<h1>Procrastinator's Paradise</h1>
			<InstantSearch
				searchClient={searchClient}
				indexName='procrastinators_paradise'>
				<SearchBox />
				<NumericMenu />
			</InstantSearch>
		</>
	)
}

export default App
