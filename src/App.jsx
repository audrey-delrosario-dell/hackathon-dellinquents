import OfficedIn from './assets/OfficedIn.jsx'
import database from './database.js';
import './App.css';

function App() {

  return (
    <div className="grid">
      <div className="officedIn"><OfficedIn users={database}/></div>
      <div className="lunchedIn"></div>
      <div className="myStatus"></div>
      <div className="links"></div>
    </div>
  )
}

export default App
