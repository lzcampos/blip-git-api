const fetch = require("node-fetch");

class CardService {

    async getCards() {
        const CARD_QUANTITY = 5;
        const takeRepos = await this.getAllTakeRepos();
        const filteredRepos = this.filterReposByLanguage(takeRepos, "C#")
        const sortedRepos = this.sortReposByCreationDate(filteredRepos)
        const olderRepos = sortedRepos.slice(0, CARD_QUANTITY)
        return {
            error: false,
            statusCode: 200,
            data: olderRepos,
            total: olderRepos.length
        }
    }

    async getAllTakeRepos() {
        try {
            const takeRepositoriesResponse = await fetch(`https://api.github.com/orgs/takenet/repos?per_page=100`);
            return await takeRepositoriesResponse.json();
        } catch(error) {
            console.log(error)
        }
    }

    filterReposByLanguage(repos, targetLanguage) {
        return repos.filter( repository => repository.language === targetLanguage)
    }

    sortReposByCreationDate(repos) {
        return repos.sort((repo, nextRepo) =>  new Date(repo).getTime() - new Date(nextRepo).getTime())
    }
}

export default CardService;