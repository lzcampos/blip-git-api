import CardController from "../src/controllers/CardController";

export default (server) => {
    server.get('/api/cards', (req, res) => CardController.getCards(req, res));
}