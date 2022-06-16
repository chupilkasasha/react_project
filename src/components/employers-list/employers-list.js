import EmployersListItem from '../employers-list-item/employers-list-item'
import './employers-list.css';


const EmployersList = ({ data, onDelite}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      // <EmployersListItem name={item.name} salary={item.salary} />
      <EmployersListItem 
      key={id} 
      {...itemProps}
      onDelite={() => onDelite(id)}
      />
    )
  })


  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  )
}

export default EmployersList;