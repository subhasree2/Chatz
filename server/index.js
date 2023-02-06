const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require('body-parser') 
const cors = require('cors')

const configuration = new Configuration({
    organization: "org-MxIHSw9vJrZO1NqKLAX6AmFY",
    apiKey: "Your-API-Key",
});
const openai = new OpenAIApi(configuration);
const app = express();
app.use(bodyParser.json())
app.use(cors())

const port = 3080
app.post("/", async (req, res) => {
    const { message } = req.body;
    
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 4000,
        temperature: 0.5,
    });
    console.log(response);
    res.json({
        message: response.data.choices[0].text,
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})