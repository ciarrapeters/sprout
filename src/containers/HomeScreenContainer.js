import React from 'react';
import AvatarContainer from './AvatarContainer';
import BoxListComponent from '../components/BoxListComponent';

class HomeScreenContainer extends React.Component {

    constructor(props) {
        super(props);

        this.updatePlayer = this.updatePlayer.bind(this);
    }

    state = {
        player1: {currentLevel: 5, totalHealth: 100, currentHealth: 90, totalExp: 100, currentExp: 60},
		player2: {currentLevel: 3, totalHealth: 100, currentHealth: 40, totalExp: 100, currentExp: 50},
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
			<div>
			    <nav className="navbar navbar-expand-sm navbar-dark hackbean-dark-green">
		            <span className="navbar-brand">
		                Your relationship with Luke
		            </span>
					<div className="dropdown">
						<button className="fas fa fa-bell badge badge-pill badge-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							1
						</button>
                        {
                            this.props.notificationState === 1 &&
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item" href="#" onClick={() => this.props.toggle('quiz')}>A new Quiz is available! Test your friends!</button>
                            </div>
                        }
                        {
                            this.props.notificationState === 2 &&
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item" href="#" onClick={() => this.props.toggle('map')}>Luke also likes Museums! Here's an idea...</button>
                            </div>
                        }
						
					</div>
		        </nav>
                <AvatarContainer 
                    player1={this.state.player1} 
                    player2={this.state.player2} 
                    updatePlayer={this.updatePlayer}
                    toggle={this.props.toggle} />
                <div style={{paddingTop: '10px'}}></div>
                <BoxListComponent 
                    updatePlayer={this.updatePlayer} 
                    activities={this.props.activities} 
                    addMapActivity={this.props.addMapActivity}
                    removeMapActivity={this.props.removeMapActivity} />
            </div>
		)
	}
}

export default HomeScreenContainer;