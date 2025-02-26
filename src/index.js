const keyvApiTests = require('./api.js');
const keyvValueTests = require('./values.js');
const keyvNamepsaceTests = require('./namespace.js');
const keyvOfficialTests = require('./official.js');

const keyvTestSuite = (test, Keyv, store) => {
	keyvApiTests(test, Keyv, store);
	keyvValueTests(test, Keyv, store);
	keyvNamepsaceTests(test, Keyv, store);
};

Object.assign(keyvTestSuite, {
	keyvApiTests,
	keyvValueTests,
	keyvNamepsaceTests,
	keyvOfficialTests
});

module.exports = keyvTestSuite;
