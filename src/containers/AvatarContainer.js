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
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="row">
								<div className="col-sm-6">
									<AvatarInfoComponent player={this.props.player1}/>
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
									<AvatarInfoComponent player={this.props.player2}/>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</React.Fragment>
		)
	}
}

export default AvatarContainer;
