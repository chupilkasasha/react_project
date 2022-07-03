import './app-info.css';
const AppInfo = ({increased, employees, riced}) => {
  return(
    <div className="app-info">
      <h1>Учет сотрудников</h1>
      <h3>Общее число сотрудников: {employees}</h3>
      <h4>Премию получат: {increased}</h4>
      <h4>Кандидаты на повышение: {riced}</h4>
    </div>
  )
}

export default AppInfo; 