import React, { ChangeEvent, useEffect, useState } from 'react';
// import logo from './logo.svg';
import {CardList } from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
	id: string | number
	name: string
	email: string
}

const App = () => {
	const [searchField, setSearchField] = useState('')
	const [monsters, setMonsters] = useState<Monster[]>([])
	const [filteredMonsters, setFilteredMonsters] = useState(monsters)

	useEffect(()=> {
		const fetchUsers =async () => {
			const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
			setMonsters(users)
		}
		fetchUsers()
	},[])

	useEffect(()=>{
		const newFilteredMonsters = monsters.filter((monster)=>{
			return monster.name.toLocaleLowerCase().includes(searchField)
		})
		setFilteredMonsters(newFilteredMonsters)
	},[monsters,setSearchField])

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		const searchFieldString = event.target.value.toLocaleLowerCase()
		setSearchField(searchFieldString)
	}

	return (
		<div className="App">
				<SearchBox
					className="monsters-search-box"
					placeholder="search monsters"
					onChangeHandler={onSearchChange}
				/>
				<CardList monsters={filteredMonsters}></CardList>
			</div>
	)
}

export default App;
