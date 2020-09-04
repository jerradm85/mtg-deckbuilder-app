import React from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import { Route, Switch, Link } from 'react-router-dom'
import Context from './Context'

import Registration from './Components/Registration/Registration'
import Decks from './Components/Decks/Decks'
import Login from './Components/Login/Login'
import CreateDeck from './Components/CreateDeck/CreateDeck'
import Card from './Components/Card/Card'



class App extends React.Component {
  state = {
    decks: [
      {
        id: 1,
        title: 'Deck 1'
      },
      {
        id: 2,
        title: 'Deck 2'
      },
      {
        id: 3,
        title: 'Deck 3'
      },
      {
        id: 4,
        title: 'Deck 4'
      },

    ],
    cards: [
      {
        id: 1,
        name: 'First Card',
        text: 'lorem ipsum',
      },
      {
        id: 2,
        name: 'Second Card',
        text: 'lorem ipsum',
      },
      {
        id: 3,
        name: 'Third Card',
        text: 'lorem ipsum',
      }
    ]
  }
  render() {
    const value = {
      decks: this.state.decks,
      cards: this.state.cards,
    }
    return (
      <Context.Provider value={value}>
        <div>
          <nav>
            <Link className='Logo' to='/'><h1>MTG Deckbuilder</h1></Link>
            <Route className='' path="/" component={Nav} />
          </nav>
            <Route path='/register' component={Registration} />
            <Route path='/decks' component={Decks} />
            <Route path='/login' component={Login} />
            <Route path='/create' component={CreateDeck} />
            <Route path='/card/:cardId' component={Card} />
        </div>
      </Context.Provider>
    )
  }
}

export default App;
