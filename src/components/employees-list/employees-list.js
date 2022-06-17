import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css';


const EmployeesList = ({ data, onDelite}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      // <EmployersListItem name={item.name} salary={item.salary} />
      <EmployeesListItem 
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

export default EmployeesList;