import React from 'react';

class AvatarComponent extends React.Component {
  render() {
		return (
            <img src={this.props.avatar} alt="" className="img-fluid"/>
		)
	}
}

export default AvatarComponent;