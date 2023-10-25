const methods = {
	routeDisplay: function(req, res, next) {
		const allocator = 
		res.render('mainpage', { user: `${req.query.forename} ${req.query.surname}`} );
	},
};

module.exports = methods;
