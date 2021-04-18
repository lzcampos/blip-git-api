import CardController from "../src/controllers/CardController";

export default (server) => {
    server.get('/', (req, res) => CardController.getCards(req, res));
}