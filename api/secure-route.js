let auth = require('./facebook-authorization-service.js');
module.exports = (app)=>{
	app
	.get('/action',(req,res)=>{
		let reqID = req.query.ownerFBUserID;
		//console.log(req.query);
		let reqToken = req.query.fbAccessToken;
		if (!reqID) {
			res.status(500).json("No user ID provided");
			return;
		}

		if (!reqToken) {
			res.status(403).json("No access token provided");
			return;
		}
		auth.VerifyTokenAuthenticityWithFacebookAPI(reqID,reqToken)
		.then((isValid)=>{
			if (isValid) {
				res.status(200).send({message:"User authenticity is verified by Facebook"});
			} else {
				res.status(403).send({message:"User authenticity is not verified by Facebook"});
			}
		})
		.catch((e)=>{
			console.log(e);
		})
	})
}
