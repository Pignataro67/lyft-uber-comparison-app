import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Button from '../Button';
import Card from '../Card';

class Search extends Component {

  state = {
    startingLocation: '',
    destination: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleChangeStart = ({value: startingLocation}) => {
    this.setState({
      startingLocation
    })
  }
  
  render() {
    return (
      <form>
        <SearchInput />
        <SearchInput />
        <SearchInput />
      </form>
    )
  }
}

export default Search;