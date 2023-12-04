// 예시 테스트
// solution(2, 10, [7, 4, 5, 6])  // 8
// solution(100, 100, [10])  // 101
// solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])  // 110

//               다리블럭길이=초  총무게    트럭배열
//                      2,          10,   [ 4, 5, 6 ]

// 1초지남 : 1.이동 → 2.제거(무게계산) → 3.추가(1블럭에)

function solution(bridge_length, weight, truck_weights) {
	let time = 0;
	let truch_Bridge = [];
	let sumWeight = 0;

	while (truch_Bridge.length > 0 || truck_weights.length > 0) {
		time++;

		// 다리 위의 트럭을 한 칸씩 이동
		for (let i = 0; i < truch_Bridge.length; i++) {
			truch_Bridge[i][1]++;
		}

		// 도착 트럭 제거 + 무게계산
		if (truch_Bridge.length > 0 && truch_Bridge[0][1] > bridge_length) {
			// if (truch_Bridge[0][1] > bridge_length) {
			let remove = truch_Bridge.shift();
			sumWeight -= remove[0];
		}

		// 트럭을 블럭1에 추가 or 스킵
		// if (truck_weights.length > 0 && sumWeight + truck_weights[0] <= weight) {
		if (truck_weights[0] && sumWeight + truck_weights[0] <= weight) {
			const truck = truck_weights.shift();
			truch_Bridge.push([truck, 1]); // 다리에 트럭 추가. 1블럭에
			sumWeight += truck;
		}
	}
	return time;
}
