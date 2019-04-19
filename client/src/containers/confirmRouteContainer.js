import React, { Component } from 'react';
import ConfirmRoute from '../components/confirmRoute/ConfirmRoute';
import Cardlabel from '../components/Cardlabel';
import card from '../components/Card'; 

class ConfirmRouteContainer extends Component {
  render() {
      let cardLabel = "...And Baby look at me now"
    return (
      <Card>
        <Cardlabel cardLabel={cardLabel} />
        <ConfirmRoute />
      </Card>
    )
  }
}

export default ConfirmRouteContainer;