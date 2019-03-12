// webtask snippet
// webtask.io/make
const Twitter = require('twitter-node-client').Twitter;
const twitter = new Twitter({
	consumerKey: '1uSHb7hemQMaMkuXTX93Mzue9',
	consumerSecret: 'f0bN02Ol7kzccatzRYLOYmxHtl8ps9x8Bwi9eUCqIujSMJw8LL',
	accessToken: '988483548-0Lp6X5rneY7E0FxU0pzBb7MGoqLeiN2xT3M4vJek',
	accessTokenSecret: 'eQB6U5yBNIkwJmGJKy19RP5pZbUEJAnNQHHM3WwI3Pg92',
	callBackUrl: ''
});

function onError(err, cb) {
	console.log('ERROR', err);
	if (err) {
		return cb(err, null);
	}
}

const onSuccess = (res, cb) => {
	console.log('SENT RESPONSE', res);
	cb(null, JSON.parse(res));
};

async function search(q, cb) {
	const response = await twitter.getSearch(
		{ q, count: 25 },
		(err) => onError(err, cb),
		(success) => onSuccess(success, cb)
	);
	return response;
}

module.exports = async function(context, cb) {
	const { q } = context.query;
	console.log('Q', q);
	return await search(q, cb);
};
