import React from 'react';
import AvatarContainer from './AvatarContainer';
import PlayerStatusComponent from '../components/PlayerStatusComponent';
import BoxListComponent from '../components/BoxListComponent';

class MainViewContainer extends React.Component {
	listItems = [];

	render() {
		return (
			<div className="row">
				<div className="col-sm-3"></div>
				<div className="container bg-light col-sm-6">
					<PlayerStatusComponent/>
					<AvatarContainer/>
					<BoxListComponent/>
				</div>
				<div className="col-sm-3"></div>
			</div>
		)
	}
}

export default MainViewContainer;
