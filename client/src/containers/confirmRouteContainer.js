import React, { Component } from 'react';
import ConfirmRoute from '../components/confirmRoute/ConfirmRoute';
import Cardlabel from '../components/Cardlabel';
import Card from '../components/Card'; 
import * as searchActions from '../actions/fetchLocations;'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ConfirmRouteContainer extends Component {
  render() {
      let cardLabel = "...And Baby look at me now"
    return (
      <Card>
        <Cardlabel cardLabel={cardLabel} />
        <ConfirmRoute {...this.props}/>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => {
  return {...bindActionCreators(searchActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    router: ownProps,
    actions: dispatchProps,
  };
})(ConfirmRouteContainer);