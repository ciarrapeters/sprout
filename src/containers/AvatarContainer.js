import React from 'react';
import AvatarInfoComponent from '../components/AvatarInfoComponent';
import AvatarComponent from '../components/AvatarComponent';
import Avatar1 from '../images/Avatar1.png'; // Tell Webpack this JS file uses this image
import Avatar2 from '../images/Avatar2.png'; // Tell Webpack this JS file uses this image


class AvatarContainer extends React.Component {

	state = {
		player1: {currentLevel: 5, totalHealth: 100, currentHealth: 90, totalExp: 100, currentExp: 60},
		player2: {currentLevel: 5, totalHealth: 100, currentHealth: 80, totalExp: 100, currentExp: 50},
	};

	updatePlayer(healthChange, ExpChange) {
		const {currentHealth, totalExp, currentExp} = this.state.player1;
		//logic check for levelup
		if(currentExp + ExpChange > totalExp) {
			this.setState(prevState => ({
				player1: {                   // object that we want to update
					...prevState.player1,    // keep all other key-value pairs
					currentExp: (currentExp + ExpChange - totalExp), 
					currentLevel: (prevState.player1.currentLevel + 1),
				}
			}));
		} else {
			this.setState(prevState => ({
				player1: {                   // object that we want to update
					...prevState.player1,    // keep all other key-value pairs
					currentExp: (currentExp + ExpChange), 
					currentHealth: (currentHealth + healthChange),
				}
			}));
		}
		console.log(this.state.player1.currentExp);
	}

  render() {
		return (
			<React.Fragment>
				<h1>Hi from Avatar Container!</h1>
				<button onClick={() => this.updatePlayer(0, 10)}>CLICK ME</button>
				<div className="row">
					<div className="col-sm-6">
						<div className="row">
							<div className="col-sm-6">
								<AvatarInfoComponent player={this.state.player1}/>
							</div>
							<div className="col-sm-6">
								<AvatarComponent avatar={Avatar1} />
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="row">
							<div className="col-sm-6">
								<AvatarComponent avatar={Avatar2} />
							</div>
							<div className="col-sm-6">
								<AvatarInfoComponent player={this.state.player2}/>
							</div>
						</div>
					</div>
				</div>
				
			</React.Fragment>
		)
	}
}

export default AvatarContainer;
