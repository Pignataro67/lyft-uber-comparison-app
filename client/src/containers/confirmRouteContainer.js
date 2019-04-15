import React, { Component } from 'react';
import ConfirmRoute from '../components/results/ConfirmRoute';
import Cardlabel from '../components/Cardlabel';

class ConfirmRouteContainer extends Component {
  render() {
      let cardLabel = "...And Baby look at me now"
    return (
      <div>
        <Cardlabel cardLabel={cardLabel} />
        <ConfirmRoute />
      </div>
    )
  }
}

export default ConfirmRouteContainer;