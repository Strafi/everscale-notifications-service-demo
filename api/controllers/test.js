const sse = require('../sse');

const test = (req, res) => {
	try {
		const returnContent = typeof req.body.message === 'string' ? req.body.message : 'some content';

		sse.send(returnContent, 'notification-received');

		res.status(200).end();
	} catch(err) {
		console.error(err);

		res.status(500).json({
			body: 'Internal error while parsing messages'
		});
	}
};

module.exports = test;
