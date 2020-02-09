import React from 'react';
import LUKE from '../images/LUKELOVE.jpg';
import CHEV from "../images/CHEV.png";
import leaf from '../images/leaf.png';
import CIARRA from '../images/CIARRAMONEY.jpeg';

class LandingPageContainer extends React.Component {
	
	render() {
		return (
			<React.Fragment>
			<nav className="navbar navbar-expand-sm navbar-dark hackbean-dark-green">
	            <span className="navbar-brand">
	                <img src={leaf} style={{width: '50px'}}/><span className="pl-2" style={{fontSize: '26px'}}>Sprout</span>
	            </span>
	            <img src={CIARRA} className="rounded-circle" style={{width: '70px'}}/>

	        </nav>
			<h4 className="py-4">Your friendships</h4>
	        <div className="container">
				<ul className="list-group">
					<li className="list-group-item" onClick={() => this.props.toggle('home')}>
						<div className="row">
							<div className="col pr-4">
								<img src={LUKE} className="rounded-circle" style={{width: '100px'}}/>
							</div>
							<div className="col p-4">
								<h4>Luke</h4>
								<span>Active</span>
							</div>
						</div>
					</li>
					<li className="list-group-item">
						<div className="row">
							<div className="col pr-2">
								<img src={CHEV} className="rounded-circle" style={{width: '60px'}}/>
							</div>
							<div className="col p-4">
								<h4>Chev</h4>
								<span>Inactive</span>
							</div>
						</div>
					</li>
				</ul>
			</div>

			</React.Fragment>
			
		)
	}
}

export default LandingPageContainer;