# Chatz
This is a simple website that allows the user to retrive answers for their queries from OpenAI API. It is part of my full stack learning journey with React. 

## Technology :
    React, Express, Node, OpenAI API
    
---

### Working of this project :


- Clone this repository in your local machine 

       git clone https://github.com/subhasree2/Chatz.git
- Open two terminals each for client and the server in your code editor (Example : VS Code)
- Set up Nodejs , Expressjs and openai

        npm install
        npm install express 
        npm install openai
- Start the client 

       npm start

- Start the server

       node index.js
- The response model can be changed in the index.js file in server
       
---

### Create OpenAI APIKey :
- Open the site "https://platform.openai.com/docs/api-reference"
- Create an account
- In your profile, click "**View API Keys**" and Click "**Create new secret key**"
- Copy and paste this key in index.js

```
const configuration = new Configuration({
    ...
    apiKey: "YourAPIKEY",
});

```

> Refresh the site or Reload the server if an error is encountered

https://user-images.githubusercontent.com/75073682/218148047-e77787c0-1796-4363-811b-4776bd14571c.mp4


