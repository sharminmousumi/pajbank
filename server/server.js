const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 1357;

const { getRandomHamsters } = require('./getCustomerList.js');


//MIDDLEWARE
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next()
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../src/views')) 

//ROUTES

app.get("/", (req, res) => {
	console.log("Listening on port: ", port);
	res.send("Woho it works!")
});

//GET RANDOM HAMSTERS
app.get('/battle', (req, res) => {
	getRandomHamsters(dataOrError => {
		res.send(dataOrError)
	});
	// res.send("/battle works!")
})

//GET SPECIFIC HAMSTERS
app.get('/battle/:id1/:id2', (req, res) => {
	getSpecificHamsters(req.params.id1, req.params.id2, dataOrError => {
		res.send(dataOrError)
	})
})

//GET RESULT
app.get('/result/:id', (req, res) => {
	getResult(req.params.id, dataOrError => {
		res.send(dataOrError)
	})
})

//GET STATISTICS
app.get('/stats', (req, res) => {
	getStatistics(dataOrError => {
		res.send(dataOrError)
	})
	////res.send("/stats works!")
})

//ADD HAMSTER
app.post('/upload', (req, res) => {
	addHamster(req.body, dataOrError => {
		res.send(dataOrError)
	})
	console.log("Detta är req.body", req.body)
	// res.send("/upload funkar!")

})

//START WEB SERVER
app.listen(port, () => {
	console.log("Web server listening on localhost:" + port);
})