import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Maks', salary: 123, increase: false, rice: false, id: 1 },
        { name: 'Duda', salary: 321, increase: false, rice: false, id: 2 },
        { name: 'Zara', salary: 1819, increase: false, rice: false, id: 3 },
      ],
      term: ''
    }
    this.maxId = 4;
  }

  deliteItem = (id) => {
    this.setState(({ data }) => {
      //const index = data.findIndex((elem) => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      return {
        data: data.filter((item) => item.id !== id)
      }
    })

  }

  addItem = (name, salary) => {
    let newItem = {
      name,
      salary,
      increase: false,
      rice: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      let newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  onToggleIncrease = (id) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //   return {
    //     data: newArr
    //   }
    // })
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, increase: !item.increase }
        }
        return item;
      })
    }))
  }
  onToggleRice = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, rice: !old.rice };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }

    })
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1
    })
  }
  onUpdataSearch = (term) => {
    this.setState({term});
  }

  render() {
    const { data, term } = this.state;

    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.searchEmp(data, term);

    return (
      <div className='app'>
        <AppInfo employees={employees} increased={increased} />
        <div className='search-panel'>
          <SearchPanel 
          onUpdataSearch={this.onUpdataSearch}/>
          <AppFilter />
        </div>
        <EmployeesList
          data={visibleData}
          onDelite={this.deliteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRice={this.onToggleRice} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }

}


export default App;