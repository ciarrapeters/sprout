import React from 'react';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'


import taco from '../images/taco.png'
import sushi from '../images/sushi.png'
import pizza from '../images/pizza.png'
import chinese from '../images/chinese.png'

import movies from '../images/movies.png'
import museum from '../images/museum.png'
import sports from '../images/sports.png'
import nature from '../images/tree.png'

const foodList = [taco, sushi, pizza, chinese]
const activityList = [movies, museum, sports, nature]

class QuizPageContainer extends React.Component {
	constructor(props) {
    super(props);
    this.state = {values: []};
		this.onPick = this.onPick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		console.log(event.target.value)
    this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
    // alert('Your food choice is: ' + this.state.value);
		event.preventDefault();
		this.props.toggle('home');
	}
	onPick(image) {
    this.setState({image});
	}
	
	render() {
		return (
			<React.Fragment>
			<nav className="navbar navbar-expand-sm navbar-dark hackbean-dark-green">
	            <button onClick={() => this.props.toggle('home')}
						className="text-secondary btn fas fa fa-times wbdv-course-editor wbdv-close">
	            </button>
	            <span className="navbar-brand">
	                Your relationship with Luke
	            </span>
	        </nav>
	
			<h2>Fill out this quiz to match activities with a friend!</h2>

			<form onSubmit={this.handleSubmit}>
			<h4>What's your favorite food?</h4>
			<div className="container">
		        <ImagePicker 
		          images={foodList.map((image, i) => ({src: image, value: i}))}
							onPick={this.onPick}
							onChange={this.handleChange}
		        />
		    </div>

			<h4>What's your favorite activity?</h4>
			<div className="container">
		        <ImagePicker 
		          images={activityList.map((image, i) => ({src: image, value: i}))}
		          onPick={this.onPick}
		        />
		     </div>
			<button type="submit" className="btn hackbean-dark-green text-white">Submit!</button>
			</form>
			</React.Fragment>
			
		)
	}
}

export default QuizPageContainer;