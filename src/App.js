import React from 'react'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
import Context from './Context'

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
    ],

    cards: [
      {
        id: 1,
        name: 'First Card',
        text: 'lorem ipsum',
        image: 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png'
      },
      {
        id: 2,
        name: 'Second Card',
        text: 'lorem ipsum',
        image: 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png'
      },
      {
        id: 3,
        name: 'Third Card',
        text: 'lorem ipsum',
        image: 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png'
      }
    ]
  }

  render() {

    const value = {
      user: this.state.user,
      decks: this.state.decks,
      cards: this.state.cards,
    }

    return (
      <Context.Provider value={value}>
        <div>
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
          <Route path='/card/:cardId' component={Card} />
          <Route path='/deck/:deckId' component={Deck} />
        </div>
      </Context.Provider>
    )
  }
}

export default App;
