

import MyInput from '../myImput/MyImput';
import MyButton from '../myButton/MyButton';
import './loginForm.css';

const LoginForm = () => {
    return (
        <form className="login-form">
            <MyInput name="login" type="text" placeholder="Введите логин" label="Логин" />
            <MyInput name="email" type="email" placeholder="Введите email" label="Email" />
            <MyInput name="password" type="password" placeholder="Введите пароль" label="Пароль" />
            <MyButton type="submit">Войти</MyButton>
            
        </form>
    );
};




export default LoginForm;