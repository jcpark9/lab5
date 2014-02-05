var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var newFriend = {
		"name": req.query.name,
		"description": req.query.description
	};
	console.log(newFriend);
	data["friends"].push(newFriend);
	
	data["newFriend"] = newFriend;

	res.render('add', data);
}