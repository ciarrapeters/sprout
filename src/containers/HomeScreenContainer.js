import React from 'react';
import AvatarContainer from './AvatarContainer';
import PlayerStatusComponent from '../components/PlayerStatusComponent';
import BoxListComponent from '../components/BoxListComponent';

class HomeScreenContainer extends React.Component {

    constructor(props) {
        super(props);

        this.updatePlayer = this.updatePlayer.bind(this);
    }

    state = {
        player1: {currentLevel: 5, totalHealth: 100, currentHealth: 90, totalExp: 100, currentExp: 60},
		player2: {currentLevel: 5, totalHealth: 100, currentHealth: 80, totalExp: 100, currentExp: 50},
    };

    updatePlayer(healthChange, ExpChange, singlePlayer) {
        const {currentHealth, totalExp, currentExp} = this.state.player1;
        var player2LevelUp = false;
        var player1LevelUp = false;
        //logic check for levelup
        if(!singlePlayer && (this.state.player2.currentExp + ExpChange >= this.state.player2.totalExp)) {
            player2LevelUp = true;
        }
        if(currentExp + ExpChange >= totalExp) {
            player1LevelUp = true;
        }
        this.setState(prevState => ({
            player1: {
                ...prevState.player1,
                currentExp: (currentExp + ExpChange) % totalExp, 
                currentLevel: (player1LevelUp? prevState.player1.currentLevel + 1 : prevState.player1.currentLevel),
                currentHealth: currentHealth + healthChange
            },
            
            player2: {
                ...prevState.player2,
                currentExp: !singlePlayer ? (prevState.player2.currentExp + ExpChange) % prevState.player2.totalExp : prevState.player2.currentExp, 
                currentLevel: (player2LevelUp? prevState.player2.currentLevel + 1 : prevState.player2.currentLevel),
                currentHealth: !singlePlayer ? prevState.player2.currentHealth + healthChange : prevState.player2.currentHealth
            }
        }));
	}

	render() {
		return (
			<React.Fragment>
                <PlayerStatusComponent/>
                <AvatarContainer player1={this.state.player1} player2={this.state.player2} updatePlayer={this.updatePlayer}/>
                <BoxListComponent updatePlayer={this.updatePlayer} />
                <button onClick={() => this.props.toggle('quiz')}>Quiz Page</button>
                <button onClick={() => this.props.toggle('map')}>Map Page</button>
            </React.Fragment>
		)
	}
}

export default HomeScreenContainer;