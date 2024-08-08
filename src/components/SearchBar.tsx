import './SearchBar.css'
import { useState } from 'react'

export const SearchBar = () => {
	const [value, setValue] = useState('')

  return <input className="input-bar" onChange={e => setValue(e.target.value)} value={value}/>
}
