import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Context from './Context'
import config from './config'
import Nav from './components/Nav/Nav'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import CreateDeck from './components/CreateDeck/CreateDeck'
import Card from './components/Card/Card'
import User from './components/User/User'
import Deck from './components/Deck/Deck'
import Main from './components/Main/Main'
import jwtService from './services/jwt-service'


class App extends React.Component {
  state = {
    user: jwtService.getToken(),
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

  setUser = (user) => {
    this.setState({
      user
    })
  }

  deleteDeck = (deckId) => {
    this.setState({
      decks: this.state.decks.filter(deck => parseInt(deck.id) !== parseInt(deckId))
    })
  }

  render() {

    const value = {
      user: this.state.user,
      decks: this.state.decks,
      cards: this.state.cards,
      setDecks: this.setDecks,
      setUser: this.setUser,
      deleteDeck: this.deleteDeck,
    }

    return (
      <Context.Provider value={value}>
        <div className="body">
          <header className="">
            <Route path='/' component={Nav} />
            <Route path='/register' component={Registration} />
            <Route path='/login' component={Login} />
          </header>
          <main>
            <Route exact path="/" component={Main} />
          </main>
          <Route path='/user' component={User} />
          <Route path='/create' component={CreateDeck} />
          <Route path='/card/:deckId/:cardId' component={Card} />
          <Route path='/deck/:deckId' component={Deck} />
        </div>
      </Context.Provider>
    )
  }
}

export default App;
