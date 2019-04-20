import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Button from '../Button';
import Card from '../Card';

class Search extends Component {

  state = {
    startingLocation: '',
    destination: ''
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleChangeStart = (e) => {
    this.setState({
      startingLocation: e.target.value,
    })
  }

  handleChangeDestination = (e, {value: destination}) => {
    this.setState({
      destination
    })
  }

  handleStartSearch = (e) => {
    e.preventDefault()
    e.stopPropogation()

    this.props.actionsfetchStartingLocation(this.state.startingLocation)
  }

  handleDropOffSearch = (e) => {
    e.preventDefault()
    e.stopPropogation()
    console.log(this.state.dropOff)
  }

  handleUpdateAddress = (e) => {
    this.setState({
      startingLocation: e.currentTarget.innerText,
    })
  }

  render() {
    return (
      <Card >
          <SearchInput label="Starting Location" 
          
          suggestedLocations = {this.props.suggestedStartingLocations} 
          onChange={this.handleChangeStart} 
          onSubmit={this.handleStartSearch}
          handleUpdateAddress={this.handleUpdateAddress}/>
          <br/>
          <SearchInput label="Destination" onChange={this.handleChangeDestination} onClick={this.dropOffSearch}/>
          <br/>
          <Button buttonTitle="Submit" onClick={this.handleFormSubmit}/>
      </Card >
    )
  }
}

export default Search;