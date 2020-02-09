import React from 'react';

class AvatarComponent extends React.Component {
  render() {
		return (
			<React.Fragment>
				<h5>Lv. {this.props.currentLevel}</h5>
				<img src={this.props.avatar} alt="" className="img-fluid" style={{width: '2000px'}}/>
			</React.Fragment>
		)
	}
}

export default AvatarComponent;