function solution(prices) {
	let tempTime = 0;
	let timeArray = [];

	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			tempTime++;
			if (prices[i] > prices[j]) {
				break;
			}
		}
		timeArray.push(tempTime);
		tempTime = 0;
	}
	return timeArray;
}