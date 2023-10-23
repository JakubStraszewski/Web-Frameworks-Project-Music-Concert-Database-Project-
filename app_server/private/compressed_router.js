var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const uri = "mongodb+srv://user187:js12345@cluster0.lxbjfoq.mongodb.net/loc8r?retryWrites=true&w=majority";

var connected = false;

try {
	mongoose.connect(uri);
	connected = true;
} catch (err) {
	(err)=>console.log("Tough start! Failed to connect to " + uri + " because of the following:\n" + err);
	connected = false;
}

if (connected) console.log("Connected to " + uri);

const Schematics = new mongoose.Schema(
	{
		kątą: { name: String, whatShouldBeTheSuperior: String },
	}
);

Schematics.methods.isWerken = function() { const objer = JSON.parse(`{ "nomen": "Testero", "wsbts": "Hopefully this is Loc8r!" }`); return objer; };

const Tester = mongoose.model("towns", Schematics);


const oggetto = new Tester({
	kątą: JSON.parse(`{ "name": "Tester","whatShouldBeTheSuperior": "Loc8r" }`),
});

console.log(oggetto.isWerken().wsbts);

oggetto.save();

/*

let found = false;

async function locate() {
	const queerie = Tester.find();
	const result = await queerie.exec((param)=>param);
	found = true;
	return result;
}

const cobst = locate();

console.log(cobst);

while (!found);
*/

const p1 = Tester.find();
console.log(p1 + ", " + typeof(p1));
while (typeof(p1) == "promise") {
		p1 = p1.then();
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', pugatio: p1} );
});

module.exports = router;
