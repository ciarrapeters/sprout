import React from 'react';

class BoxListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activities: [], text: '' };
    this.removeActivity = this.removeActivity.bind(this);
  }

  addActivity(e) {
      e.preventDefault();
      this.setState({ 
        activities: [ this.state.text, ...this.state.activities ],
        text: ''
      });
  }

  removeActivity(name, i){
      let activities = this.state.activities.slice();
      activities.splice(i, 1);
      this.setState({
          activities
      });
  }

  updateValue(e) {
      this.setState({ text: e.target.value})
  }

  render() {
      return(
				
          <div>
						
						<BoxList activities={this.state.activities} removeActivity={this.removeActivity}/>
						<form onSubmit = {(e) => this.addActivity(e)}>
					
							<div class="input-group">
							<div className="col-sm-6">
								<input type="text" class="form-control" id="inputActivity" placeholder="Activity" value={this.state.text}
											onChange={(e) => {this.updateValue(e)}}/>
								</div>
			
				
								<span class="input-group-btn">
									<button type="button" class="btn btn-primary">Add activity</button>
								</span>

							</div>
							

						</form> 
				
          </div>
			
      );
  }
}

class BoxList extends React.Component {

	removeItem(item, i) {
			this.props.removeActivity(item, i);
	}

	render() {
			return(
					<ul>
						
							{ this.props.activities.map((activity,i) => {
									return <p onClick={() => { this.removeItem(activity, i)}} key={i}>{ activity }</p>
							})}
						
					</ul>
			);
	}
}

export default BoxListComponent;

