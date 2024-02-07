const { audit } = require('koii-contruct/task');

// Backup the original method if you need to call it inside your custom logic
const originalValidateNode = audit.validateNode.bind(audit);

// Override the validateNode method with custom logic
audit.validateNode = async function (submission_value, round) {
	// Optionally call the original method within your custom logic if you need, just to show how original logic can be used and what it would return
	const originalValidateNodeResultResult = await originalValidateNode(submission_value, round);

	await myAuditLogic(submission_value, round);

	// Return the result of the original method or modify it as needed
	return originalValidateNodeResultResult;
};

const myAuditLogic = async (submission_value, round) => {
	console.log(`Custom audit logic here ${submission_value} ${round}`);
};
