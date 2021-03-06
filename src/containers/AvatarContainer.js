import React from 'react';
import AvatarInfoComponent from '../components/AvatarInfoComponent';
import AvatarComponent from '../components/AvatarComponent';
import Avatar1 from '../images/CIARRADAB.png'; // Tell Webpack this JS file uses this image
import Avatar2 from '../images/LUKEDANCE.jpg'; // Tell Webpack this JS file uses this image
import { MdShoppingCart } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";

class AvatarContainer extends React.Component {

  render() {
		return (
			<div className="my-4">
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
				<div className="row">
					<div className="col-5 text-right">
						<GiTwoCoins /> <span>375</span>
					</div>
					<div className="col text-left">
						<button className="btn hackbean-dark-green" style={{color: 'white'}} onClick={() => this.props.toggle('shop')}><MdShoppingCart size={32}/></button>
					</div>
				</div>
			</div>
		)
	}
}

export default AvatarContainer;
