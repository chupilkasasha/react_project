import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rice: false

    }
  }
  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase
    }))
  }
  onRice = () => {
    this.setState(({ rice }) => ({
      rice: !rice
    }))
  }


  render() {
    const { increase, rice } = this.state;
    const { name, salary, onDelite} = this.props;
    let classNames = 'list-group-item d-flex justify-content-between';

    if (increase) {
      classNames += ' increase';
    }
    if (rice) {
      classNames += ' like'
    }

    return (
      <li className={classNames}>
        <span className='list-group-item-label'
          onClick={this.onRice}
        >{name}</span>
        <input type='text' className='list-group-item-input' defaultValue={salary + '$'} />
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button" className='btn-cookie btn-sm'
            onClick={this.onIncrease}
          >
            <i className='fas fa-cookie'></i>
          </button>

          <button type="button" className='btn-trash btn-sm'>
            <i className='fas fa-trash' onClick={onDelite}></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>

    )
  }

}

export default EmployeesListItem;