import React from 'react';
import Button from "./button" 

class Header extends React.Component {
    render() {
      return (
        <header className='header'>
          {this.props.title}
          <Button />
          <Button text="Новая кнопка" />
        </header>
      )
    }
  }


  export default Header