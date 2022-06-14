import './app-filter.css';
const AppFilter = () => {
  return (
    <div className='btn-group'>
      <button
        type='button'
        className='btn btn-light'
      >все сотрудники
      </button>
      <button
        type='button'
        className='btn btn-outline-light'
      >на повышение
      </button>
      <button
        type='button'
        className='btn btn-outline-light'
      >зп больше 1000$
      </button>
      
    </div>
  )
}

export default AppFilter;