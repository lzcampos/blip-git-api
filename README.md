# Blip Git API

This project was developed to attend to a technical challenge from Take BLiP. The app consumes the GitHub API and returns the 5 older repositories of [TakeNet](https://github.com/takenet) made in C#, on the Blip carousel json structure.

To use the chatbot you need to download the flux [chatbot_flux.json](https://github.com/lzcampos/blip-git-api/blob/master/chatbot_flux.json) and import it on a bot created on the Blip platform.

The app was made using Node.js (v12.19.0) with Express framework and a MVC-like architecture. 

You can see it working [here](https://blip-git-api.herokuapp.com/).


## Install

```
git clone https://github.com/lzcampos/blip-git-api.git

cd blip-git-api
```

## Run

```
npm install

npm dev:start
```

### Helpful links

- [Take Blip API documentation](https://docs.blip.ai/)
- [GitHub API documentation](https://developer.github.com/v3/)
- https://dev.to/pacheco/designing-a-better-architecture-for-a-node-js-api-24d
