
class Card {
    constructor(Repo) {
        this.title = Repo.name;
        this.text = Repo.description;
        this.uri = Repo.owner.avatar_url; // Card Image
        this.type = "image/jpeg";
    }
}

export default Card;