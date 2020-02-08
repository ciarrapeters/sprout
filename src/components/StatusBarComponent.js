import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class StatusBarComponent extends React.Component {
    
    state = {
        percentage: (this.props.filled / this.props.total) * 100
    }

    componentDidUpdate(nextProps) {
        const { filled, total } = this.props
        if (nextProps.filled !== filled) {
            if (filled) {
            this.setState({ percentage: this.props.filled / this.props.total * 100 })
            }
        }
    }

    //size (225), filled (49), type/color?

  render() {
		return (
            <React.Fragment>
                <div style={{ width: 50 }}>
				<ProgressBar now={this.state.percentage} variant={this.props.color}/>
			</div>
            </React.Fragment>
		)
	}
}

export default StatusBarComponent;