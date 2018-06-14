import React, { Component } from "react";
import './App.css';
import characters from './characters.json' //dogs
import Game from './components/Game' //Wrapper
import Nav from './components/Nav' // Navpills
import Header from './components/Header' //Title
import ClickItem from './components/ClickItem' //DogCard

class App extends Component {
	state = {
		message: "Click an image to begin!",
		topScore: 0,
		curScore: 0,
		characters: characters,
		unselectedCharacters: characters
	}

	componentDidMount() {
	}

	shuffleArray = array => {
		for (let i = array.length - 1;  i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	selectCharacter = reploid => {
		const findCharacter = this.state.unselectedCharacters.find(item => item.reploid === reploid)

		if(findCharacter === undefined) {
			// failure to select a new reploid
			this.setState({
				message: "You guessed incorrectly!",
				topScore: (this.state.curScore >  this.state.topScore) ? this.state.curScore : this.state.topScore,
				curScore: 0,
				characters: characters,
				unselectedCharacters: characters
			});
		}
		else {
			// success to select a new dog
			const newReploids = this.state.unselectedCharacters.filter(item => item.reploid !== reploid);

			this.setState({
				message: "You guessed correctly!",
				curScore: this.state.curScore + 1,
				characters: characters,
				unselectedCharacters: newReploids
			});
		}

		this.shuffleArray(characters);
	};

	render() {
		return (
			<Game>
				<Nav
					message={this.state.message}
					curScore={this.state.curScore}
					topScore={this.state.topScore}
				/>
				<Header />
				{
					this.state.characters.map(character => (
						<ClickItem
							reploid={character.reploid}
							image={character.image}
							selectCharacter={this.selectCharacter}
							curScore={this.state.curScore}
						/>
						))
				}
			</Game>
		);
	}
}

export default App;
