import CardService from "../services/CardService";

const cardService = new CardService()

class CardController {
    constructor(service) {
        this.service = service;
    }

    async getCards(req, res) {
        return res.status(200).send(await this.service.getCards())
    }
}

export default new CardController(cardService);