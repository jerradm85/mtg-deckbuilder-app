import React from 'react'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
import Context from './Context'

import Nav from './Components/Nav/Nav'
import Registration from './Components/Registration/Registration'
import Login from './Components/Login/Login'
import CreateDeck from './Components/CreateDeck/CreateDeck'
import UpdateDeck from './Components/UpdateDeck/UpdateDeck'
import Card from './Components/Card/Card'
import User from './Components/User/User'
import Deck from './Components/Deck/Deck'
import Example from './Components/Main/Main'



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

  setUser = (user) => {
    this.setState({
      user
    })
  }

  render() {

    const value = {
      user: this.state.user,
      decks: this.state.decks,
      cards: this.state.cards,
      setUser: this.setUser,
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
