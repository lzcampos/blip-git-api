const fetch = require("node-fetch");

class CardService {
    constructor(model) {
        this.model = model;
    }

    async getCards() {
        const takeRepos = await this.getAllTakeRepos();
        const filteredRepositories = this.filterReposByLanguage(takeRepos, "C#")
        return {
            error: false,
            statusCode: 200,
            data: filteredRepositories,
            total: filteredRepositories.length
        }
    }

    async getAllTakeRepos() {
        try {
            const takeRepositoriesResponse = await fetch(`https://api.github.com/orgs/takenet/repos`);
            return await takeRepositoriesResponse.json();
        } catch(error) {
            console.log(error)
        }
    }

    filterReposByLanguage(allRepositories, targetLanguage) {
        return allRepositories.filter( repository => repository.language === targetLanguage)
    }
}

export default CardService;