import React from 'react';
import HomeScreenContainer from './HomeScreenContainer';
import QuizPageContainer from './QuizPageContainer';
import MapPageContainer from './MapPageContainer';

class MainViewContainer extends React.Component {

	constructor(props) {
		super(props);
		this.removeActivity = this.removeActivity.bind(this);
		this.addActivity = this.addActivity.bind(this);
	}
	state = {
		layout: 'home', // Can have home; map; quiz
		activities: [],
        notificationState: 1
    }
	//required for map activities
	removeActivity(name, i){
		let activities = this.state.activities.slice();
		activities.splice(i, 1);
		this.setState({
			activities
		});
	}

	addActivity(activity) {
		this.setState({ 
		  activities: [ activity, ...this.state.activities ],
		});
	}

    toggle = (nextPage) =>
        this.setState(prevState => {
            if (nextPage === 'quiz') {
                return ({
                    layout: 'quiz',
                    notificationState: 1
                })
            } else if (nextPage === 'map') {
                return ({
                    layout: 'map',
                    notificationState: 0
                })
            } else {
                return ({
                    layout: 'home',
                    notificationState: this.state.notificationState + 1
            	})
            }
        })

	render() {
		return (
		<React.Fragment>
				<div className="bg-light">
			        {
                        this.state.layout === 'home' &&
                        <HomeScreenContainer
                            toggle={this.toggle}
							activities={this.state.activities}
                            removeMapActivity={this.removeActivity}
                            addMapActivity={this.addActivity}
                            notificationState={this.state.notificationState} />
                    }
                    {
                        this.state.layout === 'quiz' &&
                        <QuizPageContainer
                            toggle={this.toggle}
                            notificationState={this.state.notificationState}/>
                    }
                    {
                        this.state.layout === 'map' &&
                        <MapPageContainer
                            toggle={this.toggle}
							addActivity={this.addActivity}
                            notificationState={this.state.notificationState}/>
                    }
				</div>
		</React.Fragment>
		)
	}
}

export default MainViewContainer;
