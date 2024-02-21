import React from 'react';
import * as ReactDOMClient from 'react-dom/client'

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

// class App extends React.Component {
//   helpText = 'Help Text'

//   render() {
//     return (<div className="name">
//       <Header title="Шапка сайта"/>
//       <Header title="Новая шапка сайта"/>
//       <h1>{this.helpText}</h1>
//       <input placeholder={this.helpText}
//       onClick={this.inputClick} onMouseEnter={this.mouseOver} />
//       <p>{this.helpText === "Help Text!" ? "Yes" : "No"}</p>
//     </div>)
//   }

//   inputClick() {console.log("Clicked")}
//   mouseOver() {console.log("Mouse Over")}
// }



import App from './app'
import './css/main.css'
const app =ReactDOMClient.createRoot(document.getElementById('app'))

app.render(<App />)