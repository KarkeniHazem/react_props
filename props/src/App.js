import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';
import Img from './engineer.png'
import HandleName from './Profile/HandleName';

function App() {
  return (
    <div className="App">
      <Profile name="Hazem" profession="engineer" bio="phenomenal" source={Img}/>
    <HandleName user="web dev"/>
      
    </div>
  );
}


export default App;
