import React from 'react';

class QuizPageContainer extends React.Component {
	constructor(props) {
    super(props);
    this.state = {values: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
    this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
    // alert('Your food choice is: ' + this.state.value);
		// event.preventDefault();
		this.props.toggle('home')
	}
	
	render() {
		return (
			<React.Fragment>
			<h2>Take this quiz to find common interests with your friend!</h2>
			<form onSubmit={this.handleSubmit}>
			<label>Pick your favorite food:</label>
			<div>

			<label><input type="checkbox" name="check_list[]" value="italian" onChange={this.handleChange}/><img src={require("../images/pizza.png")} alt="pizza" class="img-thumbnail"></img></label>

			<label><input type="checkbox" name="check_list[]" value="mexican" onChange={this.handleChange}/><img src={require("../images/taco.jpeg")} alt="taco" class="img-thumbnail"></img></label>

			<label><input type="checkbox" name="check_list[]" value="sushi" onChange={this.handleChange}/><img src={require("../images/sushi.png")} alt="sushi" class="img-thumbnail"></img></label>

			<label><input type="checkbox" name="check_list[]" value="chinese" onChange={this.handleChange}/><img src={require("../images/chinese.png")} alt="chinese" class="img-thumbnail"></img></label>
		
			</div>
			<label>Pick your favorite activity:</label>
			<div>
			<label><input type="checkbox" name="check_list[]" value="sports" onChange={this.handleChange}/><img src={require("../images/sports.png")} alt="sports" class="img-thumbnail"></img></label>

			<label><input type="checkbox" name="check_list[]" value="museum" onChange={this.handleChange}/><img src={require("../images/museum.png")} alt="museum" class="img-thumbnail"></img></label>

			<label><input type="checkbox" name="check_list[]" value="movies" onChange={this.handleChange}/><img src={require("../images/movies.png")} alt="movies" class="img-thumbnail"></img></label>

			</div>
			
			<button type="submit" class="btn btn-primary">Submit!</button>
			</form>
		
			</React.Fragment>
			
		)
	}
}

export default QuizPageContainer;