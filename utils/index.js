const { fetchPostTitles } = require('./fetchPostTitles');


const containsAtLeastSixtyPercentOfTitles = async (storedPostTitles, fetchedPostTitles) => {
	// Calculate the minimum number of elements that must be present
	const minElementsNeeded = Math.ceil(fetchedPostTitles.length * 0.6);
	let count = 0;

	// Use a Set for better performance on .includes() checks
	const fetchedPostTitlesSet = new Set(fetchedPostTitles);

	for (let storedPostTitle of storedPostTitles) {
		if (fetchedPostTitlesSet.has(storedPostTitle)) {
			count++;
			// Early exit if the minimum required count is reached
			if (count >= minElementsNeeded) {
				return true;
			}
		}
	}

	// After checking all elements, return false if the condition is not met
	return false;
};

module.exports = {
	containsAtLeastSixtyPercentOfTitles,
    fetchPostTitles
};
