const express = require('express')
const app = express();
const User = require('./helper');
const Error = require('./error')
const user = new User();
const error = new Error();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: false}));

// const students = [];

app.post('/student', (req, res) => {
user.createStudent(req.body)
res.send('succses')
});

app.get('/student', (req,res) => {
    res.send(user.showAll)
})

app.get('/student/:searchBy/:value', (req, res) => {
    user.searchBy(req.params.searchBy, req.params.value);
    res.send(user.searchBy(req.params.searchBy, req.params.value));
    // for(let i = 0; i < students.length; ++i){
    //     if(students[i][req.params.searchBy] === req.params.value) {
    //         return res.send(user.#students[i]);
    //     }
    // }
    // return res.send('student not found!')
})

app.delete('/student/:deleteBy/:value', (req, res) => {
    user.deleteBy(req.params.deleteBy, req.params.value)
    res.send('success')
})

app.put('/student/:searchByValue', (req, res) =>{
    for(let i = 0; i < students.length; ++i){
        if(students[i].email === req.params.searchByValue){
            for (let key in req.body){
                students[i][key] = req.body[key]
            }
    }
}
    res.send('Changes has been done')
})


app.listen(3000);