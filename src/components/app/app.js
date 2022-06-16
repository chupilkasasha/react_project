import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Maks', salary: 123, increase: true, id: 1 },
        { name: 'Duda', salary: 321, increase: false, id: 2 },
        { name: 'Zara', salary: 1819, increase: true, id: 3 },
      ]
    }
    this.maxId = 5;

  }
  deliteItem = (id) => {
    this.setState(({ data }) => {
      //const index = data.findIndex((elem) => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      return {
        data: data.filter((item) => item.id !== id )
      }
    })

  }
  render() {
    const { data } = this.state;
    return (
      <div className='app'>
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList
          data={data}
          onDelite={this.deliteItem}
        />
        <EmployersAddForm />
      </div>
    )
  }

}


export default App;