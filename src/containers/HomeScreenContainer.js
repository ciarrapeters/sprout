import React from 'react';
import AvatarContainer from './AvatarContainer';
import PlayerStatusComponent from '../components/PlayerStatusComponent';
import BoxListComponent from '../components/BoxListComponent';

class HomeScreenContainer extends React.Component {

	render() {
		return (
			<React.Fragment>
                <PlayerStatusComponent/>
                <AvatarContainer/>
                <BoxListComponent/>
            </React.Fragment>
		)
	}
}

export default HomeScreenContainer;