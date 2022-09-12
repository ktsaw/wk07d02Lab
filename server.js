
const express = require('express')  //load express
const app = express()               //create express app

//route goes below
//Greeting

app.get('/greetings/:name', (req, res) => {
    res.json({
        message: `Hello, ${req.params.name}!
        It's so great to see you!`
    })
})
// app.listen(3000, () => {                     //tell the app to listen on port 3000 for HTTP request from clients
//     console.log('listening on port 3000')
// })

//Tip Calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = req.params.total * (req.params.tipPercentage / 100);
    res.json({
        tip: `Your tip amount is: ${tip}`
    })
})

// app.listen(3000, () => {
//     console.log('listening on port 3000')
// })

//Magic 8 balls

let answerResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it",
 "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
 "Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", 
 "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:Will%20I%20be%20a%20millionaire', (req, res) => {
    //let question = req.params.question
    let answer = Math.floor(Math.random() * answerResponse.length)  //generate random number to get an index
    res.json({                                                           //make sure this inside of app.get
        answer: `<h1>${answerResponse[answer]}</h1>`
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})