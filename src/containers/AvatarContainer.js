import React from 'react';
import AvatarInfoComponent from '../components/AvatarInfoComponent';
import AvatarComponent from '../components/AvatarComponent';
import Avatar1 from '../images/Avatar1.png'; // Tell Webpack this JS file uses this image
import Avatar2 from '../images/Avatar2.png'; // Tell Webpack this JS file uses this image


class AvatarContainer extends React.Component {

  render() {
		return (
			<React.Fragment>
				<h1>Hi from Avatar Container!</h1>
				<button onClick={() => this.props.updatePlayer(0, 10, false)}>CLICK ME</button>
				<div className="d-flex flex-row">
					<div className="col-2" style={{transform: 'translate(75px, 50px) rotate(270deg)'}}>
						<AvatarInfoComponent player={this.props.player1}/>
					</div>
					<div className="col-4">
						<AvatarComponent avatar={Avatar1} currentLevel={this.props.player1.currentLevel}/>
					</div>
					<div className="col-4">
						<AvatarComponent avatar={Avatar2} currentLevel={this.props.player2.currentLevel}/>
					</div>
					<div className="col-2" style={{transform: 'translate(50px, 50px) rotate(270deg)'}}>
						<AvatarInfoComponent player={this.props.player2}/>
					</div>
				</div>
				
			</React.Fragment>
		)
	}
}

export default AvatarContainer;
