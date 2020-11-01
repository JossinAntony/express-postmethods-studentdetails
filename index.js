const express = require('express');
const bodyparser = require('body-parser');
const { urlencoded } = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.send('Welcome..')
});

app.get('/getStudentDetails', (req, res)=>{
    var getname = req.query.name;
    var getrollno = req.query.rollno;
    var getadmno = req.query.admno;
    var getcollege = req.query.college;

    res.send('<h3>Welcome,</h3>' + '<ul>' + 
    '<li>'+ getname + '</li>' + 
    '<li>'+ getrollno + '</li>' + 
    '<li>'+ getadmno + '</li>' + 
    '<li>'+ getcollege + '</li>' + 
    '</ul>');
//http://localhost:3000/getStudentDetails?name=abin&rollno=123&admno=8989&college=TKM
});


app.post('/postStudentDetails', (req, res)=>{
    var getname = req.body.name;
    var getrollno = req.body.rollno;
    var getadmno = req.body.admno;
    var getcollege = req.body.college;

    res.status(200).json({
        'name': getname,
        'rollno': getrollno,
        'admno': getadmno,
        'college': getcollege
    });

});

app.listen(3000, (e)=>{
    if(e){
        console.log('error..')
    }else{
        console.log('Server running at http://localhost:3000')
    }
});