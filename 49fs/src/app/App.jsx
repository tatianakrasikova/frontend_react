
import userImg from '../assets/user.jpg'
import reactImg from '../assets/react.jpg'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
<h1> Я вас люблю,  милые котики !</h1>

        <img  src = {userImg} className="user-img" alt = " "/>
        
        <img  src = {reactImg} className="react-jpg" alt = " "/>
        
      
         </header>
        
    </div>
  );
}

export default App;
