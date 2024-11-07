import './button.css'
// подключение css файла из текущей папки

// функция-компонент должна называться с большой буквы
// имя файла тоже называется с большой буквы и совпадает с именем функции
function Button() {
   return(
    <div className="App1">
    <header className="App-header1">
<h1> У меня живут три котика !</h1>
  
  <button className="my-button">Click me!</button>  
  </header>
    
    </div>
  );
}


// не забываем сделать export для связи с другими компонентами

export default Button;