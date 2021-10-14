const sse = require('../sse');

const test = (req, res) => {
	try {
		console.log(req.body);

		const returnContent = typeof req.body === 'string' ? req.body : 'some content';

		sse.send(returnContent, 'notification-received');

		res.status(200);
	} catch(err) {
		console.error(err);

		res.status(500).json({
			body: 'Internal error while parsing results table'
		});
	}
};

module.exports = test;
