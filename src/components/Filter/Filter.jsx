import {Component} from 'react'

export default class Filter extends Component {

  handleSearch = ({target}) => {
    this.props.onChange(target.value)
  }

  render() {
    return (
      <input name='search' placeholder='Search...'onChange={this.handleSearch}></input>
    )
  }
}
