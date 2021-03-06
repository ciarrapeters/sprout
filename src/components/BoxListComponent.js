import React from 'react';

class BoxListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.removeMapActivity = this.removeMapActivity.bind(this);
  }

  addActivity(e) {
      e.preventDefault();
      this.props.addMapActivity(this.state.text, 10, false);
      this.setState({ 
        text: ''
      });
  }

  removeMapActivity(name, i, exp, single){
      this.props.updatePlayer(0, exp, single);
      this.props.removeMapActivity(name, i);
  }

  updateValue(e) {
      this.setState({ text: e.target.value})
  }

  render() {
      return(
        <React.Fragment>
        <div className="container">
          <div className="hackbean-light-green" style={{paddingBottom: '10px'}}>
            <h4>Activities</h4>
            <BoxList 
              mapActivities={this.props.activities} 
              activities={this.state.activities} 
              removeMapActivity={this.removeMapActivity} />
            <div className="container">
						<form onSubmit = {(e) => this.addActivity(e)}>
							<div className="input-group">
								<input type="text" className="form-control" id="inputActivity" placeholder="Pick up trash..." value={this.state.text}
											onChange={(e) => {this.updateValue(e)}}/>
								<span className="input-group-btn">
									<button type="submit" className="btn hackbean-dark-green text-white">Add activity</button>
								</span>
              </div>
						</form> 
            </div>
          </div>
          </div>
          </React.Fragment>
      );
  }
}

class BoxList extends React.Component {
  
  removeMapItem(item, i, exp, single) {
    this.props.removeMapActivity(item, i, exp, single);
  }

	render() {
			return(
        <div className="container">
          <ul className="list-group list-group-flush" style={{height: '350px'}}>
              { this.props.mapActivities.map((activity,i) => {
                  return <li className="hackbean-light-blue list-group-item" onClick={() => { this.removeMapItem(activity, i, activity.exp, activity.single)}} key={i}>{ activity.activity }</li>
              })}
					</ul>
          </div>
			);
	}
}

export default BoxListComponent;

