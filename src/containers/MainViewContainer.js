import React from 'react';
import HomeScreenContainer from './HomeScreenContainer';

class MainViewContainer extends React.Component {
	listItems = [];

	render() {
		return (
			<div className="row">
				<div className="col-sm-3"></div>
				<div className="container bg-light col-sm-6">
					<HomeScreenContainer/>
				</div>
				<div className="col-sm-3"></div>
			</div>
		)
	}
}

export default MainViewContainer;
