import reactImg from '../../assets/reise.jpg'
import './profileCard.css'
function ProfileCard() {
    // мы можем создать переменную с версткой и положить в нее тег li
    const element = <li>Альпинистка</li>;
    // или мы можем создать переменную со строкой для тега в верстке
    const text = "1978";
    const company = "Facebook"
    // объект с данными о пользователе
    const user = {
      firstName: 'Светлана',
      lastname: 'Иванова'
    }
    // функция, обрабатывающая данные объекта
    function formatUser(name) {
      return name.firstName + ' ' + name.lastname
    }
    // переменная от значения которой зависит отображение данных
    // на странице в тернарном операторе
    const isLoggedIn = true
    return (
      <div className="lesson-container">
        <h3>Карточка клиента </h3>
        <p>Персональные данные</p>
        {/* для отображения такой переменной мы пишем ее в фигурных скобках */}
        <img className="reise-img" src={reactImg} alt="reiseImg" />
        <ul>
          <li>ФИО</li>
          {formatUser(user)} 
          <li>Год рождения</li>
          <li>{text}</li>
          <li>Место работы: {company}</li>
          <li>хобби:  {element} </li>
          {/* пример использования тернарного оператора внутри тега */}
          <li>User {isLoggedIn ? 'в': 'не в'}  системе </li>
        </ul>
        {/* импорт компонента-кнопки */}
        
      
      </div>
    );
  }

// не забываем сделать export для связи с другими компонентами
export default ProfileCard;