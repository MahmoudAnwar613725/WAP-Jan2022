const express = require('express');
const path = require("path");
const app = express();
app.listen(8080, ()=>{
    console.log('Your server is running on port 8080')
})

app.all('/' , (req, res, next)=>{
    res.sendFile(path.join(__dirname, '', 'SimpleAdder.html'));
})

app.get("/add.js",(req,res,next)=>{
    const operation = req.query.op
    let result = 0;
    switch (operation) {
        case "sum":
            result = parseFloat(req.query.firstNum) + parseFloat(req.query.secondNum)
            break
        case "sub":
            result = parseFloat(req.query.firstNum) - parseFloat(req.query.second)
            break
        case "div":
            result = parseFloat(req.query.firstNum) / parseFloat(req.query.secondNum)
            break
        case "mult":
            result = parseFloat(req.query.firstNum) * parseFloat(req.query.secondNum)
            break
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<!DOCTYPE html>
        <html>
            <head><meta charset="utf-8"/>
                <title>Calculator Web Site</title>
            </head>
            <body>
                <p>The result is: ${String(result)}</p>
            </body>
        </html> `);
    return res.end();
})
