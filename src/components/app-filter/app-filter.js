import './app-filter.css';

const AppFilter = (props) => {
  const buttonData = [
    { name: 'all', label: 'все сотрудники' },
    { name: 'rice', label: 'на повышение' },
    { name: 'moreThan1000', label: 'зп больше 1000$' },
    { name: 'moreThan1000', label: 'test' }
  ];

  const buttons = buttonData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        type='button'
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)} >
        {label}
      </ button>
    )
  }
  )

  return (
    <div className='btn-group'>
      {buttons}
    </div>
  )
  //   <button
  //     type='button'
  //     className='btn btn-light'
  //   >все сотрудники
  //   </button>
  //   <button
  //     type='button'
  //     className='btn btn-outline-light'
  //   >на повышение
  //   </button>
  //   <button
  //     type='button'
  //     className='btn btn-outline-light'
  //   >зп больше 1000$
  //   </button>


}

export default AppFilter;