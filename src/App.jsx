import Header from "./component/Header";
import Quadrant from './component/Quadrant';
import UserMenu from './component/UserMenu';

import "./assets/styles/App.css";

const App = () => {
    return (
        <div>
          <Header/>
          <UserMenu/>
          <Quadrant/>
        </div>
    );
};

export default App;