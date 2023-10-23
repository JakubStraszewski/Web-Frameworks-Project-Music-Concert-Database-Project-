const mongoose = require("mongoose");

const methods = {
	initializeDatabase : function() {
		const uri = "mongodb+srv://user187:js12345@cluster0.lxbjfoq.mongodb.net/MusicalConcertDatabase?retryWrites=true&w=majority";
		let conStatus = false;
		try {
			mongoose.connect(uri);
			conStatus = true;
		} catch (err) {
			conStatus = false;
		}
		if (conStatus) console.log("Connected to " + uri);
	},
	createObject: function(blueprint) {
			const out = mongoose.Schema(blueprint);
			return mongoose.model("data", out);
	},
	persistObject: function(model) {
		model.save();
	},
	retrieveObjectArray: async function(model) {
		return await model.find().exec();
	},
};

module.exports = methods;