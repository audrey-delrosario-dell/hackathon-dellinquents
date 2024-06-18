import Header from "./component/Header";
import Quadrant from './component/Quadrant';
import UserMenu from './component/UserMenu';



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