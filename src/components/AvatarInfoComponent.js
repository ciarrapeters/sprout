import React from 'react';
import StatusBarComponent from './StatusBarComponent';

class AvatarInfoComponent extends React.Component {
  render() {
      const { totalHealth, currentHealth, totalExp, currentExp } = this.props.player;
		return (
            <React.Fragment>
                <StatusBarComponent total={totalExp} filled={currentExp} color={"warning"} label={'EXP'}/>
                <StatusBarComponent total={totalHealth} filled={currentHealth} color={(totalHealth / 2) > currentHealth ? "danger" : "success"} label={'♥ ♥ ♥'}/>
            </React.Fragment>
		)
	}
}

export default AvatarInfoComponent;