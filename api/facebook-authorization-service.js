let Request = require('request');
let graphURLStub = `https://graph.facebook.com/me?access_token=`;

// this works as is... but how to test it?
class FacebookVerificationService{
	VerifyTokenAuthenticityWithFacebookAPI(fbUserID, fbAccessToken) {
		return new Promise((resolve)=>{
			Request.get(graphURLStub + fbAccessToken, (err, res)=>{
				let body = JSON.parse(res.body);
				let id = body.id;
				console.log(fbUserID,id);
				if (id === fbUserID) {
					resolve(true);
				} else {
					resolve(false);
				}
			})
		})
	}
}

module.exports = new FacebookVerificationService();
