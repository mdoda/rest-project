const express = require('express');


const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');
// const res = require('express/lib/response');

const app = express();

// app.use(cors({credentials: true, origin: true}))
app.use(bodyParser.json()); // application/json

app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if ("OPTIONS" == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

// app.use((req,res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });


// app.all('/*', function(req, res, next) {
//     res.setHeader('Acccess-Control-Allow-Origin', '*');
//     next();
// });

app.use('/professional', professionalRoutes);

app.listen(8080);