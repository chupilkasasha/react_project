import './search-panel.css';


const SearchPanel = () =>{
  return(
      <div classNane='search-panel'>
        <input
        type="text"
        className='form-control search-input'
        placeholder='найти сотрудника в базе'
        />
      </div>
  )
}

export default SearchPanel;