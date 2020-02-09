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
		activities: []
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
                    layout: 'quiz'
                })
            } else if (nextPage === 'map') {
                return ({
                    layout: 'map'
                })
            } else {
                return ({
                    layout: 'home'
            	})
            }
        })

	render() {
		return (
			<div className="row">
				<div className="col-sm-3"></div>
				<div className="container bg-light col-sm-6">
			        {	
                        this.state.layout === 'home' &&	
                        <HomeScreenContainer
                            toggle={this.toggle}
							activities={this.state.activities}
							removeMapActivity={this.removeActivity}
						/>
                    }
                    {	
                        this.state.layout === 'quiz' &&	
                        <QuizPageContainer
                            toggle={this.toggle}/>
                    }
                    {	
                        this.state.layout === 'map' &&	
                        <MapPageContainer
                            toggle={this.toggle}
							addActivity={this.addActivity}
						/>
                    }
				</div>
				<div className="col-sm-3"></div>
			</div>
		)
	}
}

export default MainViewContainer;
