import MyButton from "../../components/myButton/MyButton"

function Lesson03() {
  // эти функции мы передаем в props компоненту MyButton
  const handleClick = () => {
    console.log("click!");
  };

  const handleSubmit = () => {
    console.log("submit!");
  };

  const handleReset = () => {
    console.log("reset!");
  };

  return (
    <div className="lesson-container">
      <h2>Lesson 03</h2>
      <p>React props</p>
      <p>Это способ передачи данных от компонента родителя к компоненту ребенку</p>
      <p>Мы хотим научиться передавать в компонент разные данные:</p>
      {/* имя для ключей props (text, func) мы придумываем самостоятельно */}
      {/* важно использовать эти же имена ключей в самом компоненте, когда вы встречаете данные */}
      <div>
        <MyButton  text={"Нажми меня!"} func={handleClick} isDanger={true} />
        <MyButton text={"Submit"} func={handleSubmit} isDanger={false} />
        <MyButton text={"Reset"} func={handleReset}  isDanger={false}  />
        {/* за счет значений props по умолчанию это кнопка имеет текст 'Click' и стилизацию danger и функцию handleDefaultClick */}
        <MyButton />
      </div>
    </div>
  );
}

export default Lesson03;