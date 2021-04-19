import Card from "../models/Card";

const fetch = require("node-fetch");

class CardService {

    constructor() {
        this.CARD_QUANTITY = 5;
    }

    async getCards() {
        const takeRepos = await this.getAllTakeRepos();
        if(takeRepos?.error === true) return takeRepos;

        const [cards, cardsObject] = this.convertReposIntoCards(takeRepos);
        return {
            type: "application/vnd.lime.collection+json",
            content: {
                itemType: "application/vnd.lime.document-select+json",
                items: cards,
            },
            // Using this to make caroussel work on builder...
            cardsObject
        }
    }

    convertReposIntoCards(repos) {
        const filteredRepos = this.filterReposByLanguage(repos, "C#");
        const sortedRepos = this.sortReposByCreationDate(filteredRepos);
        const olderRepos = sortedRepos.slice(0, this.CARD_QUANTITY);
        const cardsObject = this.buildCardsObject(olderRepos);
        return [this.buildCards(olderRepos), cardsObject];
    }

    async getAllTakeRepos() {
        try {
            const takeRepositoriesResponse = await fetch(`https://api.github.com/orgs/takenet/repos?per_page=100`);
            return await takeRepositoriesResponse.json();
        } catch(error) {
            return {
                error: true,
                statusCode: error.code,
                message: error.message
            }
        }
    }

    filterReposByLanguage(repos, targetLanguage) {
        return repos.filter( repository => repository.language === targetLanguage)
    }

    sortReposByCreationDate(repos) {
        return repos.sort((repo, nextRepo) =>  new Date(repo.created_at).getTime() - new Date(nextRepo.created_at).getTime())
    }

    buildCards(repos) {
        return repos.map((repo) => ({
            header : {
                type: "application/vnd.lime.media-link+json",
                value: new Card(repo)
            },
            options: [{
                label: {
                    type: "text/plain",
                    value: "",
                },
                value: {
                    type: "application/json",
                    value: {
                        key1: "value1",
                        key2: "2"
                    }
                }
            }]
        }))
    }

    buildCardsObject(repos) {
        let cardsObject = {};
        for(let i = 0; i < repos.length; i++ ){
            cardsObject[`${i + 1}`] = new Card(repos[i]);
        }
        return cardsObject;
    }
}

export default CardService;