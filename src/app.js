import React from 'react';


// const inputClick = () => console.log('clicked')
// const mouseOver = () => console.log('mouse Over')


// const Header = () => {
//   return (
//     <header>Шапка сайта</header>
//   )
// }

// const App = () => {
//   return (<div className="name">
//     <Header />
//     <h1>{helpText}</h1>
//     <input placeholder={helpText}
//     onclick={inputClick} onMouseEnter={mouseOver} />
//     <p>{helpText === "Help Text!" ? "Yes" : "No"}</p>
//   </div>)
// }


// Функциональное представление
// class Header extends React.Component {
//   render() {
//     return (
//       <header>{this.props.title}</header>
//     )
//   }
// }


import Header from './components/header'
import Image from './components/image'
import logo from './img/react_logo_icon_144942.png'

class App extends React.Component {
  helpText = 'Help Text'

  render() {
    return (<div className="name">
      <Header title="Шапка сайта"/>
      <Header title="Новая шапка сайта"/>
      <h1>{this.helpText}</h1>
      <input placeholder={this.helpText}
      onClick={this.inputClick} onMouseEnter={this.mouseOver} />
      <p>{this.helpText === "Help Text!" ? "Yes" : "No"}</p>
      <Image image={logo} />
    </div>)
  }

  inputClick() {console.log("Clicked")}
  mouseOver() {console.log("Mouse Over")}
}


export default App