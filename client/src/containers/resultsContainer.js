import React, { Component } from 'react';
import Results from '../components/results/Results';
import CardLabel from '../components/CardLabel';

class ResultsContainer extends Component {
  render() {
    let cardlabel = "shutup and drive"

    return (
      <div>
        <CardLabel cardLabel={cardLabel}/>
      </div>
    )
  }
}

export default ResultsContainer;