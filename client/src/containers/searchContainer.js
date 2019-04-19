import React, { Component } from 'react';
import Search from '../components/search/Search';
import Cardlabel from '../components/CardLabel';
import * as searchActions from '../actions/fetchLocations'
import { bindActionCreators } from 'redux';
import { connect } from 'reaxct-redux';

class SearchContainer extends Component {
  render() {
      let cardLabel = "Enter your trip locations below:"
    return (
      <div>
        <CardLabel cardLabel={cardLabel}/>
        <Search />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  startingLocation: state.startingLocation,
  dropOff: state.dropOff
})

const mapDispatchToProps = (dispatch) => {
  return {...bindActionCreators(searchActions, dispatch)}
}

export default SearchContainer;