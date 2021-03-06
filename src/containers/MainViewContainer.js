import React from 'react';
import HomeScreenContainer from './HomeScreenContainer';
import QuizPageContainer from './QuizPageContainer';
import MapPageContainer from './MapPageContainer';
import ShopContainer from './ShopContainer';
import LandingPageContainer from './LandingPageContainer';

class MainViewContainer extends React.Component {

	constructor(props) {
		super(props);
		this.removeActivity = this.removeActivity.bind(this);
		this.addActivity = this.addActivity.bind(this);
	}
	state = {
		layout: 'landing', // Can have home; map; quiz
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

	addActivity(activity, exp, single) {
        const fullActivity = {
            activity,
            exp,
            single
        };
		this.setState({ 
		  activities: [ fullActivity, ...this.state.activities ],
		});
	}

    toggle = (nextPage) =>
        this.setState(prevState => {
            if (nextPage === 'quiz') {
                return ({
                    layout: 'quiz',
                    notificationState: 2
                })
            } else if (nextPage === 'map') {
                return ({
                    layout: 'map',
                    notificationState: 3
                })
            } else if (nextPage === 'shop') {
                return ({
                    layout: 'shop',
                    notificationState: 3
                })
            } else if (nextPage === 'landing') {
                return ({
                    layout: 'landing'
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
				<div className="hackbean-light">
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
                            addMapActivity={this.addActivity}
                            notificationState={this.state.notificationState}/>
                    }
                    {
                        this.state.layout === 'map' &&
                        <MapPageContainer
                            toggle={this.toggle}
							addActivity={this.addActivity}
                            notificationState={this.state.notificationState}/>
                    }
                    {
                        this.state.layout === 'landing' &&
                        <LandingPageContainer
                            toggle={this.toggle}/>
                    }
                    {
                        this.state.layout === 'shop' &&
                        <ShopContainer
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
