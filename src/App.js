import React from 'react';
// import logo from './logo.svg';
import {CardList } from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			monsters : [],
			search : '',
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({monsters : users}) )
	}

	render(){
		const {monsters,search} = this.state;
		const filteredMonsters = monsters.filter(monster => 
			monster.name.toLowerCase().includes(search.toLowerCase())
		)
		return (
			<div className="App">
				<SearchBox
					placeholder="search monsters"
					handleChange={e => this.setState({search : e.target.value})}
				/>
				<CardList monsters={filteredMonsters}></CardList>
			</div>
		);
	}

}

export default App;
