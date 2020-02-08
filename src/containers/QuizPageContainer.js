import React from 'react';

class QuizPageContainer extends React.Component {

	render() {
		return (
			<React.Fragment>
				<h1>Look ma, Im on tv!</h1>
				<button onClick={() => this.props.toggle('home')}>Home Page</button>
			</React.Fragment>
		)
	}
}

export default QuizPageContainer;