import { Component } from 'react';
import './search-panel.css';


class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

  }
  onUpdataSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdataSearch(term);
  }


  render() {
    return (
      <div classNane='search-panel'>
        <input
          type="text"
          className='form-control search-input'
          placeholder='найти сотрудника в базе'
          value={this.state.term}
          onChange={this.onUpdataSearch}
        />
      </div>
    )
  }

}

export default SearchPanel;