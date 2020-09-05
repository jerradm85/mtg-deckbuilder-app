import React from 'react'
import './CreateDeck.css'

class CreateDeck extends React.Component {

    handleAddCard = e => {
        e.preventDefault();
        // console.log(e.target.cardSelect.value)
        // const card = e.target.select.value
        // return (
        //     <div>
        //         <p>{card}</p>
        //     </div>
        // )
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push('/user')
    }

    render() {
        return (
            <form class='createDeck' action="">
                <fieldset>
                    <legend>Create new deck</legend>
                    <label>Name:</label>
                    <input></input>
                    <label>Cards:</label>
                    <select id='cardSelect'>
                        <option value="">Card1</option>
                        <option value="">Card2</option>
                        <option value="">Card3</option>
                        <option value="">Card4</option>
                    </select>
                    <button onClick={this.handleAddCard}>Add</button>
                    <label></label>
                    <textarea></textarea>
                    <button onClick={this.handleSubmit}>Submit</button>
                </fieldset>
            </form>
        )
    }
}

export default CreateDeck;