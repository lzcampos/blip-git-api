import CardService from "../services/CardService";
import Card from "../models/Card"

const cardService = new CardService(
    new Card({title: "", subtitle: "", imageUrl: ""})
)

class CardController {
    constructor(service) {
        this.service = service;
    }

    async getCards(req, res) {
        return res.status(200).send(await this.service.getCards())
    }
}

export default new CardController(cardService);