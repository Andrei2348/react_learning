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
    constructor(props){
        super(props)
        this.state = {
            helpText: "Help text",
            userData: ""
        }
        this.inputClick = this.inputClick.bind(this)
    }
  helpText = 'Help Text'

  // Хуки в классах
  componentDidUpdate(prevProp){
    if(this.state.helpText !== "Help")
      console.log("some")
  }

  render() {
    return (<div className="name">
      <Header title="Шапка сайта"/>
      {/* <Header title="Новая шапка сайта"/> */}
      <h1>{this.state.helpText}</h1>
      <h2>{this.state.userData}</h2>
      <input placeholder={this.state.helpText}
              onChange={event => this.setState({userData: event.target.value})}
              onClick={this.inputClick} 
              onMouseEnter={this.mouseOver} />
      <p>{this.state.helpText === "Help Text!" ? "Yes" : "No"}</p>
      <Image image={logo} />
    </div>)
  }

  inputClick() {
    this.setState({helpText: 'Changed'})
    console.log("Clicked")
}
  mouseOver() {console.log("Mouse Over")}
}


export default App