import React from 'react';
import HomeScreenContainer from './HomeScreenContainer';
import QuizPageContainer from './QuizPageContainer';
import MapPageContainer from './MapPageContainer';

class MainViewContainer extends React.Component {
	state = {
        layout: 'home' // Can have home; map; quiz
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
                            toggle={this.toggle}/>
                    }
                    {	
                        this.state.layout === 'quiz' &&	
                        <QuizPageContainer
                            toggle={this.toggle}/>
                    }
                    {	
                        this.state.layout === 'map' &&	
                        <MapPageContainer
                            toggle={this.toggle}/>
                    }
				</div>
				<div className="col-sm-3"></div>
			</div>
		)
	}
}

export default MainViewContainer;
