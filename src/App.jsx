import Header from "./component/Header"
import LunchedIn from './component/LunchedIn';
import MyLinks from "./component/MyLinks";
import MyStatus from "./component/MyStatus";
import OfficedIn from "./component/OfficedIn";

function App() {

  return (
    <div>
      <Header/>
      <div className="splitScreen">
        <LunchedIn/>
        <OfficedIn/>
        <MyStatus/>
        <MyLinks/>

      </div>
    </div>
  )
}

export default App
