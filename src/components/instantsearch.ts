import instantsearch from 'instantsearch.js'
import { relatedProducts } from 'instantsearch.js/es/widgets'
import algoliasearch from 'algoliasearch/lite'

const searchClient = algoliasearch(
	'JICQ4O9RUI',
	'826f68dc6516a63f9fdd1eee33568bcb'
)

const search = instantsearch({
	searchClient,
	indexName: 'procrastinators_paradise',
}).addWidgets([
	relatedProducts({
		container: '#recommend-container',
		objectIDs: ['e5a62330733cc_dashboard_generated_id'],
	}),
])

search.start()
