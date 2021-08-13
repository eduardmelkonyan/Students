const express = require("express");
const app = express();
const user = require('./user');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: false}));

app.post('/user', (req, res) =>{
res.send(user.addUser(req.body))
});

app.get('/user', (req, res) => {
    res.send(user.showData);
})

app.get('/user/:searchBy/:value', (req, res) => {
    res.send(user.searchBy(req.params.searchBy, req.params.value));
});

app.delete('/user/:deleteBy/:value', (req, res) => {
    res.send(user.deleteBy(req.params.deleteBy, req.params.value));
})

app.put('/user/:searchByValue', (req, res) => {
    res.send(user.update(req.params.searchByValue, req.body))
})
app.listen(3000);