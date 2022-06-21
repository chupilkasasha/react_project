import './app-info.css';
const AppInfo = ({increased, employees}) => {
  return(
    <div className="app-info">
      <h1>Учет сотрудников</h1>
      <h3>Общее число сотрудников: {employees}</h3>
      <h3>Премию получат: {increased}</h3>
    </div>
  )
}

export default AppInfo; 