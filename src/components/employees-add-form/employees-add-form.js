import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }

  }
  onValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.name.lenght < 2 || !this.state.salary) return alert('не корректный ввод');
    
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: ''
    })
  }

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h4>Добавьте нового сотрудника</h4>
        <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}>
          <input type="text"
            className="form-control new-post-label"
            placeholder="имя сотрудника?"
            name='name'
            value={name}
            onChange={this.onValueChange}
            maxlength="10"
          />
          <input type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name='salary'
            value={salary}
            onChange={this.onValueChange}
            maxlength="3"
          />

          <button type="submit"
            className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    )
  }

}

export default EmployeesAddForm;
