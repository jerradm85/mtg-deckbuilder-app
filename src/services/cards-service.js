import config from '../config'
import jwtService from './jwt-service'

const CardsService = {
    postDeckCards(cardArr) {
        return fetch(`${config.API_ENDPOINT}/deckcards`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cardArr)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getDeckCards(deckId) {
        return fetch(`${config.API_ENDPOINT}/deckcards/${deckId}`, {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${jwtService.getToken()}`,
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
    }
}

export default CardsService
