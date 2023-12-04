// 해시
clothes = [
	["yellow_hat", "headgear"],
	["blue_sunglasses", "eyewear"],
	["green_turban", "headgear"],
];

function solution(clothes) {
	clothesHash = {};
	let sum = 0;
	let mul = 1;

	// 객체 : 해시맵 작성
	for (let i = 0; i < clothes.length; i++) {
		let clothesType = clothes[i][1];
		clothesHash[clothesType] = clothesHash[clothesType] || 0;
		clothesHash[clothesType]++;
	}
	// clothesHash =
	// [
	//     [ headgear, 2 ],
	//     [ eyewear, 1 ]
	// ]

	// 경우의 수
	for (let type in clothesHash) {
        // 미착용인 경우 더함
        // 3 * 2 = 6
		mul *= clothesHash[type] + 1; 
	}

	return mul - 1; // 전체 미착용인 경우 제외
}