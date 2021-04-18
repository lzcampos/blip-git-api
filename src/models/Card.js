
class Card {
    constructor(Repo) {
        this.title = Repo.name;
        this.subtitle = Repo.description;
        this.uri = Repo.owner.avatar_url; // Card Image
    }
}

export default Card;