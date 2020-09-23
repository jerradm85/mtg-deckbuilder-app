import React from 'react'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
import Context from './Context'
import config from './config'
import Nav from './components/Nav/Nav'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import CreateDeck from './components/CreateDeck/CreateDeck'
import UpdateDeck from './components/UpdateDeck/UpdateDeck'
import Card from './components/Card/Card'
import User from './components/User/User'
import Deck from './components/Deck/Deck'
import Example from './components/Main/Main'



class App extends React.Component {
  state = {
    user: null,
    decks: [],
    cards: []
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/cards`)
    .then(res => res.json())
    .then(cards => {
      this.setState({
        cards
      })
    })
  }

  setDecks = (decks) => {
    this.setState({
      decks
    })
  }

  render() {

    const value = {
      user: this.state.user,
      decks: this.state.decks,
      cards: this.state.cards,
      setDecks: this.setDecks,
    }

    return (
      <Context.Provider value={value}>
        <div className="body">
          <header className="">
            <Link className="logo" to='/'><h1>MTG Deckbuilder</h1></Link>
            <Route className='' exact path="/" component={Nav} />
            <Route path='/register' component={Registration} />
            <Route path='/login' component={Login} />
          </header>
          <main>
            <Route exact path="/" component={Example} />
          </main>
          <Route path='/user' component={User} />
          <Route path='/create' component={CreateDeck} />
          <Route path='/update' component={UpdateDeck} />
          <Route path='/card/:deckId/:cardId' component={Card} />
          <Route path='/deck/:deckId' component={Deck} />
        </div>
      </Context.Provider>
    )
  }
}

export default App;
