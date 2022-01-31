const express = require("express");
const path = require('path');
const app = express();
app.set("view engine", "pug")
app.use(express.static(__dirname));


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
var array = [
    "1,1,2,3,5,...",
    "1,4,9,16,25,...",
    "2,3,5,7,11,...",
    "1,2,4,8,16,....",
    "3,1,4,1,5,...."
];
var arrayAnswerKey = [8,36,13,24,9]
var questindex = 0;
var urscore = 0;


//define routes here
app.get("/", function (req, res) {
    //  res.send('<html lang="en"><body><h1>Hello World</h1></body></html>');
    //   res.sendFile( __dirname, 'index.html');
    questindex = 0;
    res.render('question', {index: questindex + 1, question: array[questindex], score:urscore});

})

function checkAnswer(answer) {
    return arrayAnswerKey[questindex] === parseInt(answer);
}


app.post('/submit-student-data', function (req, res) {
    var userAnswer = req.body.answer;
    if (checkAnswer(userAnswer)) {
        urscore++;
    }
    questindex++;
    if (questindex < array.length)
        res.render('question', {index: questindex + 1, question: array[questindex], score:urscore});
    else {
        res.render('end', {
            score: urscore,
            total: array.length,
            result: "you have answered " + urscore + " out of " + array.length
        });
    }

});

app.post('/retry', function (req, res) {
    questindex = 0;
    urscore = 0;
    res.render('question', {index: questindex + 1, question: array[questindex], score:urscore});

})

var server = app.listen(5000, function () {
    console.log("Node server is running...")
    console.log(__dirname + "/publci")


})