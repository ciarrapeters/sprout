import React from 'react';

class BoxListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activities: [], text: '' };
    this.removeActivity = this.removeActivity.bind(this);
    this.removeMapActivity = this.removeMapActivity.bind(this);
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
      this.props.updatePlayer(0, 10, false);
      this.setState({
          activities
      });
  }

  removeMapActivity(name, i){
      this.props.updatePlayer(0, 10, false);
      this.props.removeMapActivity(name, i);
  }

  updateValue(e) {
      this.setState({ text: e.target.value})
  }

  render() {
      return(
          <div className="container">
            <BoxList 
              mapActivities={this.props.activities} 
              activities={this.state.activities} 
              removeMapActivity={this.removeMapActivity} 
              removeActivity={this.removeActivity} />
						<form onSubmit = {(e) => this.addActivity(e)}>
							<div className="input-group">
								<input type="text" className="form-control" id="inputActivity" placeholder="Activity" value={this.state.text}
											onChange={(e) => {this.updateValue(e)}}/>
								<span className="input-group-btn">
									<button type="submit" className="btn btn-primary">Add activity</button>
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
  
  removeMapItem(item, i) {
    this.props.removeMapActivity(item, i);
  }

	render() {
			return(
					<ul className="list-group list-group-flush">
              { this.props.mapActivities.map((activity,i) => {
                  return <li className="list-group-item bg-light" onClick={() => { this.removeMapItem(activity, i)}} key={i}>{ activity }</li>
              })}
              { this.props.activities.map((activity,i) => {
                  return <li className="list-group-item bg-light" onClick={() => { this.removeItem(activity, i)}} key={i}>{ activity }</li>
              })}
					</ul>
			);
	}
}

export default BoxListComponent;

