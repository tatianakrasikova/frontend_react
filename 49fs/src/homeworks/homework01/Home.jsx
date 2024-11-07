import userImg from '../../assets/user.jpg'
import reactImg from '../../assets/react.jpg'
import Button from "./button/Button";
import './home.css'


function Home() {
    // мы можем создать переменную с версткой и положить в нее тег li
    const element = <li>Element in variable</li>;
    // или мы можем создать переменную со строкой для тега в верстке
    const text = "Text for JSX tag";
    const company = "Facebook"
  
    // объект с данными о пользователе
    const user = {
      firstName: 'Brendan',
      lastname: 'Eich'
    }
  
    // функция, обрабатывающая данные объекта
    function formatUser(name) {
      return name.firstName + ' ' + name.lastname
    }
  
    // переменная от значения которой зависит отображение данных
    // на странице в тернарном операторе
    const isLoggedIn = false
  
  
    return (
      <div className="lesson-container">
        <h3>Homework 01</h3>
        <p>React JSX components</p>
        {/* для отображения такой переменной мы пишем ее в фигурных скобках */}
        <img className="react-img" src={reactImg} alt="reactImg" />
        <img className="user-img" src={userImg} alt="userImg" />

        <ul>
          <li>Simple text</li>
          {element}
          <li>{text}</li>
          <li>React was created by {company}</li>
          <li>{formatUser(user)} is creator of JS</li>
          {/* пример использования тернарного оператора внутри тега */}
          <li>User {isLoggedIn ? 'is': 'is NOT'} in the system</li>
        </ul>
        {/* импорт компонента-кнопки */}
        <Button/>
        
        
      </div>
    );
  }
  export default Home;
