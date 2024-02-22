import React, { useEffect, useState } from 'react';


const Button = (props) => {
    const [click, setClick] = useState(0)
    console.log(click)
    useEffect(() => {
        //Изменение текста заголовка
        document.title = `Вы нажали ${click} раз`
    })
    return (
    <button onClick={() => setClick(click + 1)}>{props.text} {click}</button>
    )
    
}

// Значение по умолчанию
Button.defaultProps = {
    text: "Кнопка"
}



export default Button