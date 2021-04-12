import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import EmployeeSearch from './components/employeeSearch';
function App() {
  return (
    <div className="App" style={{backgroundColor:"pink"}}>
      <Header/>
      <br></br>
      <EmployeeSearch/>
    
    </div>
  );
}

export default App;
