const express = require('express');
const app = express();
const taq = {
	name: 'Taq Karim',
	age: 25
};

app.get('/firstPage', function (req, res) {
  res.json(taq);
});

app.get('/firstPage.html', function(req, res){
	res.send(`<h1>Hello, Wrold from ${ taq.name } ${ taq.age }</h1>`);
});

app.post('/updateName', function(req, res){
	
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});