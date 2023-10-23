var dbapi = require('../components/database');
const methods = {
	topLevel: function(req, res, next) {
		res.render('index', { title: "Main Menu", data: "No data for this level." });
	},
	db: function(req, res, next) {
		dbapi.initializeDatabase();
		const TestObject = dbapi.createObject({
			title: String,
			date: String,
			price: Number,
		});
		const objectData = {
			title: "TesterConcertos",
			date: "23-10-2023",
			price: 3000.0,
		};
		dbapi.persistObject(new TestObject(objectData));
		const retrieved = dbapi.retrieveObjectArray(TestObject);
		console.log(retrieved.then(function(param) { console.log("Callback 1 returned " + param); }, function(param) { console.log("Callback 2 returned " + param); }));
		dataWithin = (req.query.stringer) ? req.query.stringer : "Data:";
		let out = undefined;
		retrieved.then(function(param) { console.log("Callback 1 returned " + param); out = param; res.render('index', { title: "Main Menu (db)", data: dataWithin + ": " + out }); }, function(param) { console.log("Callback 2 returned " + param); });
	},
};

module.exports = methods;
