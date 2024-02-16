const { namespaceWrapper, submission, audit } = require('koii-task-creator').creator;
const { fetchPostTitles, containsAtLeastSixtyPercentOfTitles } = require('./utils');

submission.task = async function (round) {
	const redFlagDealsPostsTitles = await fetchPostTitles();
	//store on local db
	await namespaceWrapper.storeSet('postTitles', JSON.stringify(redFlagDealsPostsTitles));
	console.log('ROUND', round); //if you want to see current round
};

submission.fetchSubmission = async function (round) {
	//fetch stored postTitles
	const storedPostTitles = await namespaceWrapper.storeGet('postTitles');
	console.log(round);
	return storedPostTitles;
};

// Override the validateNode method with custom logic, submission_value is storedPostTitles
audit.validateNode = async function (submission_value, round) {
	// Write your logic for the validation of submission value here and return a boolean value in response
	const storedPostTitles = JSON.parse(submission_value);
	const postTitles = await fetchPostTitles();

	//returns boolean if 60% of the titles are the same
	const result = await containsAtLeastSixtyPercentOfTitles(storedPostTitles, postTitles);
	console.log(round);
	return result;
};
