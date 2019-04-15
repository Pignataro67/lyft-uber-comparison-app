import React, { Component } from 'react';
import Search from '../components/search/Search';
import Cardlabel from '../components/CardLabel';

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

export default SearchContainer;