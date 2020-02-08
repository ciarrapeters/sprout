import React from 'react';
import HomeScreenContainer from './HomeScreenContainer';
import MapPageContainer from './MapPageContainer';

class MainViewContainer extends React.Component {
	listItems = [];

	render() {
		return (
			<div className="row">
				<div className="col-sm-3"></div>
				<div className="container bg-light col-sm-6">
					<MapPageContainer/>
				</div>
				<div className="col-sm-3"></div>
			</div>
		)
	}
}

export default MainViewContainer;
