import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Button from '../Button';
import Card from '../Card';

class Search extends Component {

  state = {
    startingLocation: '',
    destination: ''
  }

  handleFormSubmit = () => {
    // e.preventDefault()
    console.log(this.state)
  }

  handleChangeStart = ({value: startingLocation}) => {
    this.setState({
      startingLocation
    })
  }

  handleChangeDestination = ({value: destination}) => {
    this.setState({
      destination
    })
  }

  handleStartSearch = () => {
    console.log(this.state.startngLocation)
  }

  handleDropOffSearch = () => {
    console.log(this.state.dropOff)
  }

  render() {
    return (
      <Card >
          <SearchInput label="Starting Location" onChange={this.handleChangeStart} onClick={this.handleStartSearch}/>
          <br/>
          <SearchInput label="Destination" onChange={this.handleChangeDestination} onClick={this.dropOffSearch}/>
          <br/>
          <Button buttonTitle="Submit" onClick={this.handleFormSubmit}/>
      </Card >
    )
  }
}

export default Search;