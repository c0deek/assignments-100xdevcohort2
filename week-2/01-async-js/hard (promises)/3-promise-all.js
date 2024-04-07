/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
	return new Promise((res, rej) => {
		setTimeout(res, t * 1000);
	});
}

function wait2(t) {
	return new Promise((res, rej) => {
		setTimeout(res, t * 1000);
	});

}

function wait3(t) {
	return new Promise((res, rej) => {
		setTimeout(res, t * 1000);
	});

}

function calculateTime(t1, t2, t3) {
	let sum = 0;
	const startTime = new Date().getTime();
	Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((values) => {
		const endTime = new Date().getTime();
		return endTime - startTime;
	});
}

module.exports = calculateTime;
