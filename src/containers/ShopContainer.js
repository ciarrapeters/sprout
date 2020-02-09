import React from 'react';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'


import taco from '../images/outfit1.png'
import sushi from '../images/outfit2.png'
import pizza from '../images/outfit3.png'
import chinese from '../images/outfit4.png'

import movies from '../images/outfit5.png'
import museum from '../images/outfit6.png'

const foodList = [taco, sushi, pizza, chinese, movies, museum]

class ShopContainer extends React.Component {
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
	                Shop
	            </span>
	        </nav>

	        <div className="container">
				<form onSubmit={this.handleSubmit}>
	        		<ImagePicker 
	          			images={foodList.map((image, i) => ({src: image, value: i}))}
							onPick={this.onPick}
							onChange={this.handleChange} />

					<button type="submit" class="btn btn-outline-info">Purchase</button>
				</form>
			</div>

			</React.Fragment>
			
		)
	}
}

export default ShopContainer;