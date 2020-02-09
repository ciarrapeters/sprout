import React from 'react';
import StatusBarComponent from './StatusBarComponent';

class AvatarInfoComponent extends React.Component {
  render() {
      const { totalHealth, currentHealth, totalExp, currentExp } = this.props.player;
		return (
            <React.Fragment>
                <StatusBarComponent total={totalExp} filled={currentExp} color={"success"}/>
                <StatusBarComponent total={totalHealth} filled={currentHealth} color={"danger"}/>
            </React.Fragment>
		)
	}
}

export default AvatarInfoComponent;