import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class StatusBarComponent extends React.Component {

  render() {
		return (
            <React.Fragment>
                <div style={{ width: 100 }}>
				<ProgressBar now={this.props.filled / this.props.total * 100} variant={this.props.color}/>
			</div>
            </React.Fragment>
		)
	}
}

export default StatusBarComponent;